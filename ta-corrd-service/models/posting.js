/**
 * Created by shrey.mahendru on 2017-03-04.
 */

var mongoose = require('mongoose');

var postingSchema = mongoose.Schema({

    course_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Course',
        required : true
    },

    requirements :{
        type : String,
        required : true
    },

    start_date: {
        type: Date,
        required: true
    },

    end_date: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model('Posting', postingSchema);