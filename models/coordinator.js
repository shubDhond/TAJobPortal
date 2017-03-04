/**
 * Created by shrey.mahendru on 2017-03-04.
 */

var mongoose = require('mongoose');

var coordinatorSchema = mongoose.Schema({

    email: String,
    Password: String,
    name: String
});

//Have to define model specific methods here

module.exports = mongoose.model('Coordinator', coordinatorSchema);