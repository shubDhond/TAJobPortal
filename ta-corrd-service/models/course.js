/**
 * Created by shrey.mahendru on 2017-03-04.
 */

let mongoose = require('mongoose');

let courseSchema = mongoose.Schema({

    course_code : {
        type : String,
        required: true},

    term : {
        type: String,
        enum: ['Summer', 'Winter', 'Fall'],
        required:true},

    instructor: [String],

    campus: {
        type: String,
        enum:['St George', 'UTM', 'UTSC'],
        required: true},

    ta_needed: {
        type: Number,
        required:true},

    tas : {
        type: [{
                type : mongoose.Schema.Types.ObjectId,
                unique: true}],
        validate: [taLimit, '{PATH} exceeds the limit of ' + this.ta_needed]}

});


/**
 * Ta limit Validator.
 */

function taLimit(tas) {
    return tas.length <= this.ta_needed
}

module.exports = mongoose.model('Course', courseSchema);