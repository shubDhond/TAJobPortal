/**
 * Created by shrey.mahendru on 2017-03-04.
 */
let express = require('express');
let router = express.Router();
let Assignment = require('../models/assignment');
let Course = require('../models/course');
let checkCoordinatorToken = require('./checkCoordinatorToken');
let checkGenericToken = require('./checkGenericToken');

/** GET all assignments or search by query param.
 * query_params could be
 * course_id,
 * */
router.get('/', checkGenericToken, function(req, res) {
    Assignment.find(req.query, (err, assignments) =>{
        "use strict";
        if (err) throw err;

        if (assignments.length == 0){
            res.status(404).json({
                message :"No Assignments found"
            });
        } else {
            let new_assign = convertMongoDoc(JSON.stringify(assignments) );
            get_course(new_assign, (response) => {
                res.status(200).json(response);
            });
        }
    });
});

function convertMongoDoc(assignments) {
    let new_res = [];
    assignments = JSON.parse(assignments);
    for(let i=0; i < assignments.length; i++){
        let post = {};
        let obj = assignments[i];
        for (let key in Object.keys(obj)){
            post[Object.keys(obj)[key]] = obj[Object.keys(obj)[key]];
        }
        new_res.push(post);
    }
    return new_res;
}

function get_course(assignments, callback) {
    let index = 0;
    for(let i = 0; i < assignments.length; i ++) {
        Course.find({"_id" : assignments[i].course_id}, (err, course) => {
            if (err) throw err;
            course = convertMongoDoc(JSON.stringify(course));
            if (course.length > 0){
                assignments[i]['course'] = course[0];
            }
            else{
                assignments[i]['course'] = {};
            }
            index += 1;
            if (index == assignments.length) {
                callback(assignments);
            }
        }).lean();
    }
}



router.post('/', checkCoordinatorToken, (req, res)=>{
    "use strict";

    Course.findOne({
        '_id' : req.body.course_id
    }, (err, course)=>{
        if(err) throw err;

        if (!course){
            res.status(404).json({
                message: "Course not found."
            });
        } else {
            Assignment.findOne({
                'course_id' : req.body.course_id
            }, (err, assignment)=>{
                if (err) throw err;

                if (assignment){
                    assignment.ta_assignments.push({
                        'student_id' : req.body.student_id,
                        'posting_id' : req.body.posting_id,
                        'application_id' : req.body.application_id,
                        'notes' : req.body.notes,
                    });
                    assignment.save((err) =>{
                        if (err) throw err;

                        let new_assign = convertMongoDoc(JSON.stringify([assignment]) );
                        get_course(new_assign, (response) => {
                            res.status(200).json({
                                message : "Assignment created.",
                                assignment : response[0]});
                        });

                    });
                } else {
                    let assignment  = new Assignment({
                        course_id : req.body.course_id,
                        ta_assignments: [{
                            'student_id': req.body.student_id,
                            'posting_id': req.body.posting_id,
                            'application_id': req.body.application_id,
                            'notes': req.body.notes,
                        }]
                    });
                    assignment.save((err) =>{
                        if (err) throw err;

                        let new_assign = convertMongoDoc(JSON.stringify([assignment]) );
                        get_course(new_assign, (response) => {
                            res.status(200).json({
                                message : "Assignment created.",
                                assignment : response[0]});
                        });

                    });
                }
            });
        }
    });
});


router.put('/:course_id', checkCoordinatorToken, (req, res)=>{
    "use strict";
    Assignment.findOne({
        'course_id' : req.params.course_id
    }, (err, assignment) =>{
        if (err) throw err;

        if (!assignment){
            res.status(404).json({
                message: 'Assignment for the course not found.'
            });
        } else{
            console.log(assignment.ta_assignments[0]);

            for (let i = 0; i< assignment.ta_assignments.length; i++){
                if (assignment.ta_assignments[i]['student_id'] == req.body.student_id){
                    assignment.ta_assignments[i]['status'] = req.body.status;
                    assignment.ta_assignments[i]['notes'] = req.body.notes;
                    assignment.save((err) => {
                        if (err) throw err;

                        let new_assign = convertMongoDoc(JSON.stringify([assignment]) );
                        get_course(new_assign, (response) => {
                            res.status(200).json({
                                message : "Assignment created.",
                                assignment : response[0]});
                        });

                    });
                    return;
                }
            }
            res.status(404).json({
                message : 'No assignment for this course and student',
                assignment: assignment
            });
        }
    });
});

router.delete('/:course_id', checkCoordinatorToken, (req, res) =>{
    "use strict";
    Assignment.findOne({
        course_id : req.params.course_id
    }, (err, assignment)=>{
        if (err) throw err;
        if (!assignment){
            res.status(404).json({
                message: 'Assignment not found.'
            });
        } else {
            for(let i= 0; i < assignment.ta_assignments.length; i++){
                if (assignment.ta_assignments[i]['student_id'] == req.body.student_id){
                    assignment.ta_assignments.splice(i, 1);
                    assignment.save((err) => {
                        if (err) throw err;
                        let new_assign = convertMongoDoc(JSON.stringify([assignment]) );
                        get_course(new_assign, (response) => {
                            res.status(200).json({
                                message : "Assignment Deleted.",
                                assignment : response[0]});
                        });

                    });
                    return;
                }
            }
            let new_assign = convertMongoDoc(JSON.stringify([assignment]) );
            get_course(new_assign, (response) => {
                res.status(404).json({
                    message : "Student not assigned to this course.",
                    assignment : response[0]});
            });

        }
    });
});

module.exports = router;
