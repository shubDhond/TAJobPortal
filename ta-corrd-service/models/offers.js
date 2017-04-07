/**
 * Created by shrey.mahendru on 2017-04-06.
 */

let mongoose = require('mongoose');

let offerSchema = mongoose.Schema({

    user_id: {
        type: String,
        required: true
    },

   application_id :{
        type : String,
        required: true
    },

    posting_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Posting',
        required: true
    },

    course_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
   },

    status:{
       type: String,
        enum : ['offer_sent', 'offer_accepted', 'offer_rejected'],
        default: 'offer_sent'
    },

    deadline: {
<<<<<<< HEAD
       type: Date
=======
       type: Date,
        required: true
>>>>>>> origin/master
    },

    notes: {
        type: String,
    }

});

<<<<<<< HEAD
module.exports = mongoose.model('Offer', offerSchema);
=======
module.exports = mongoose.model('Offer', offerSchema);
>>>>>>> origin/master
