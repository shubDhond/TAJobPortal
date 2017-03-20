/**
 * Created by shrey.mahendru on 2017-03-04.
 */
let express = require('express');
let router = express.Router();
let Assignment = require('../models/assignment');
let Course = require('../models/course');

/** GET all assignments or search by query param.
 * query_params could be
 * course_id,
 * */
router.get('/', function(req, res) {
    Assignment.find(req.query, (err, assignmnets) =>{
        "use strict";
        if (err) throw err;

        if (assignmnets.length == 0){
            res.status(404).json({
                message :"No Assignments found"
            });
        } else {
            res.status(200).json(assignmnets);
        }
    });
});

router.post('/', (req, res)=>{
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

                        res.status(200).json({
                            message : 'Assignment created.',
                            assignmnet : assignment
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

                        res.status(200).json({
                            message : 'Assignment created.',
                            assignment : assignment
                        });

                    });
                }
            });
        }
    });
});


router.put('/:course_id', (req, res)=>{
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
            for (let i = 0; i< assignment.ta_assignments.length; i++){
                if (assignment.ta_assignments[i]['student_id'] == req.body.student_id){
                    assignment.ta_assignments[i]['status'] = req.body.status;
                    assignment.notes[i]['notes'] = req.body.notes;
                    assignment.save((err) => {
                        if (err) throw err;

                        res.status(200).json({
                            message: 'Assignment updated',
                            assignment : assignment
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

router.delete('/:course_id', (req, res) =>{
    "use strict";
    Assignment.findOne({
        course_id : req.body.course_id
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
                        res.status(200).json({
                            message: 'Assignment Deleted.',
                            assignment : assignment
                        });
                    });
                    return;
                }
            }
            res.status(404).json({
               message : 'Student not assigned to this course.',
                assignment : assignment
            });
        }
    });
});

module.exports = router;
