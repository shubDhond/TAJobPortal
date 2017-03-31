/**
 * Created by shrey.mahendru on 2017-03-19.
 */
let express = require('express');
let router = express.Router();
let Application = require('../models/application');
let checkCoordinatorToken = require('./checkCoordinatorToken');
let checkCoordinatorTokenOrStudentById = require('./checkCoordinatorTokenOrStudentById');
let checkStudentToken = require('./checkStudentToken');
let checkGenericToken = require('./checkCoordinatorToken');

/** GET all applications or search by query param.
 * query_params could be
 * anything in defined in the Application model
 * */
router.get('/', checkCoordinatorTokenOrStudentById, (req, res) => {
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

router.post('/', checkCoordinatorTokenOrStudentById, (req, res) =>{
    "use strict";
    Application.findOne({
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

router.get('/:id', checkCoordinatorTokenOrStudentById, (req, res)=>{
    "use strict";
    Application.findOne({
        '_id' : req.params.id
    }, (err, application)=>{
        if (err) {
            res.status(404).json({
                message: err.message
            });
            return;
        }

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


router.put('/:id', checkCoordinatorTokenOrStudentById, (req, res)=>{
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

router.delete('/:id', checkCoordinatorTokenOrStudentById, (req, res) =>{
    "use strict";
   Application.findOne({
       '_id' : req.params.id
   }, (err, application) =>{
       if (err){
           res.status(400).json({
               message: err.message
           });
           return;
       }
       application.remove();
       res.status(200).json({
           message: 'Application successfully deleted'
       });
   });
});

module.exports = router;
