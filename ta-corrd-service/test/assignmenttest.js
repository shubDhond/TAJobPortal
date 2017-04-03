/**
 * Created by TenzinLama on 2017-03-7.
 */
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let Posting = require('../models/posting');
let Course = require('../models/course');
let app = require('../app');
chai.use(chaiHttp);

let student_token;
let coordinator_token;

let newCourseBody = {
    course_code: "CSC500H1S",
    term: "Fall",
    year: "2018",
    instructor: "Danny",
    ta_needed: 5,
    tas: ["john", "dave"]
};

let startDate = new Date("January 1, 2017");
let endDate = new Date("April 30, 2017");
let newPostingBody = {
    requirements: "nothing",
    start_date: startDate,
    end_date: endDate
};

let ta_coord_signin_args = {
    headers: {
        'x-coordinator-account-key': "PROJAWOLCOORDINATORACCOUNTKEY",
        "Content-Type": "application/json"
    },
    data: {
        email: 'test',
        id: 'test',
        password: 'test',
        user_type: 'ta-coordinator'
    },
};

let student_signin_args = {
    headers: {
        "Content-Type": "application/json"
    },
    data: {
        email: 'test2',
        password: 'test2'
    },
}

let course_id;
let posting_id;

describe('assignments', function(){
  this.timeout(0);
  before((done)=>{
    let newCourse = new Course(newCourseBody);
    newCourse.save((err, doc) => {
        if (err) throw err;
        course_id = doc._id;
        newPostingBody.course_id = doc._id;
        let newPosting = new Posting(newPostingBody);
        newPosting.save((err,doc)=>{
          if(err) throw err;
          posting_id = doc._id;

        });
    });

  });

  after((done)=>{
    done();
  });
})
