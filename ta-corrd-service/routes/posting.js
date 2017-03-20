/**
 * Created by shrey.mahendru on 2017-03-04.
 */
let express = require('express');
let router = express.Router();
let Posting = require('../models/posting');
let Course = require('../models/course');

/** GET all postings or search by query param.
 * query_params could be
 * course_id
 * */
router.get('/', function(req, res) {
    Posting.find(req.query, (err, postings) =>{
        "use strict";
       if (err) throw err;

       if (postings.length == 0) {
           res.status(404).json({
               message: "No posting found."
           });
       } else{
           res.status(200).json(postings);
       }
    });
});

router.post('/', (req, res) =>{
    "use strict";

    Course.findOne({
        "_id" : req.body.course_id
    }, (err, course)  => {
        if (err) throw err;

        if (course){
            Posting.findOne({
                course_id : req.body.course_id
            }, (err, existingPosting) =>{
                if (err) throw err;

                if (existingPosting){
                    res.status(409).json({
                        message : "Posting all ready exists."
                    });
                } else {
                    let posting  = new Posting({
                        course_id: req.body.course_id,
                        requirements: req.body.requirements,
                        start_date: req.body.start_date,
                        end_date: req.body.end_date
                    });

                    posting.save((err) => {
                        if (err){
                            res.status(400).json({
                                message: err.message
                            });
                        } else {
                            res.status(200).json({
                                message : 'New Posting created.',
                                posting : posting
                            });
                        }
                    })
                }
            })

        } else {
            res.status(400).json({
              message : "Course Not found"
            });
        }
    });

});

router.get('/:id', (req, res) =>{
    "use strict";
    Posting.findOne({
        '_id' : req.params.id
    }, (err, posting) =>{
       if (err) throw err;

       if (!posting){
           res.status(404).json({
               message: "Posting not found."
           });
       } else{
           res.status(200).json({
               posting: posting
           });
       }
    });
});

router.delete('/:id', (req, res) =>{
    "use strict";
    Posting.findOne({
        '_id' : req.params.id
    }, (err, posting) =>{
        if (err){
            res.status(400).json({
                message: err.message
            })
        } else if (!posting){
            res.status(404).json({
                message: 'Posting not found'
            });
        } else {
            res.status(200).json({
                message: 'Posting successfully deleted'
            });
        }
    });
});

module.exports = router;
