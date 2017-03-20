/**
 * Created by shrey.mahendru on 2017-03-19.
 */
let express = require('express');
let router = express.Router();
let Application = require('../models/application');

/** GET all applications or search by query param.
 * query_params could be
 * anything in defined in the Application model
 * */
router.get('/',(req, res, next) => {
    // let params =  req.query;
    Application.find(req.query, (err, applications)=>{
        "use strict";
        if (err) throw err;

        if (applications.length == 0){
            res.status(404).json({
                message: 'No Applications found'
            });
        } else{
            res.status(200).json(applications);
        }
    });

});

router.post('/', (req, res, next) =>{
    "use strict";
    Application.find({
        user_id: req.body.user_id,
        posting_id: req.body.posting_id
    }, (err, existingApplication)=>{
       if (err) throw err;

       if(existingApplication){
           res.status(409).json({
               message: 'Already applied to this posting.'
           });
           return;
       }
       let application = new Application(req.body);
       application.save((err) => {
           if (err){
               res.status(400).json({
                   message: err.message
               });
               return;
           }
           res.status(200).json({
               message: "Application Submitted.",
               application : application
           })
       })
    });
});

router.get('/:id', (req, res)=>{
    "use strict";
    Application.findOne({
        '_id' : req.params.id
    }, (err, application)=>{
        if (err) throw err;

        if (!application){
            res.status(404).json({
                message : "Application not found"
            });
            return;
        }
        res.status(200).json({
            application: application
        });
    });
});


router.put('/:id', (req, res)=>{
    "use strict";
    Application.findOne({
        '_id' : req.params.id
    }, (err, application)=>{

        if (err) throw err;

        if (!application){
            res.status(404).json({
                message: "Application not found"
            });
            return;
        }

        for (let key in req.body){
            if (!req.body.hasOwnProperty(key) || !req.body.hasOwnProperty(key)){
                continue;
            }
            if( key == 'course_taken'){
                application.course_taken.push(req.body.course_taken);
            }
            else if (key == 'previous_assignments'){
                application.previous_assignments.push(req.body.previous_assignments);
            }
            else {
                application[key] = req.body[key];
            }
        }
        application.save((err)=>{
            if (err) {
                res.status(400).json({
                    message: err.message
                });
                return;
            }

            res.status(200).json({
                message: "Application Updated",
                application : application
            });
        });

    });
});

router.delete('/:id', (req, res) =>{
    "use strict";
   Application.remove({
       '_id' : id
   }, (err) =>{
       if (err){
           res.status(400).json({
               message: err.message
           });
           return;
       }
       // application.remove();
       res.status(200).json({
           message: 'Application successfully deleted'
       });
   });
});

module.exports = router;
