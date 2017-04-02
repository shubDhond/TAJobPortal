let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let Client = require('node-rest-client').Client;
let client = new Client();
let app = require('../app');
let Application = require('../models/application');
chai.use(chaiHttp);

let newAppBody = {
    user_id: "1",
    posting_id: "2",
    student_number: "3",
    first_name: "Tenzin",
    last_name: "Lama",
    phone_number: "444-4444",
    email: "tenzin@gmail.com",
    program: "Computer Science",
    year_of_study: "2017",
    department_explain: "department explain",
    work_status: "working",
    work_status_explain: "explination",
    student_status: "student",
    student_status_explain: "explination",
    course_taken: ["CSC301", "CSC302"],
    previous_assignments: ["CSC428", "csc400"]
};
let _id;

let coordinator_token;
let student_token;
let student_token2;

describe('ApplicantService', function() {
    this.timeout(0);
    before(function(done) {
        //sign up for 3 accounts. 2 students and 1 ta
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
        let student_signin_args2 = {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                email: 'test3',
                password: 'test'
            }
        }
        //student signin/authenticate
        client.post('http://localhost:3002/students/sign-up', student_signin_args, function(data, res) {
            client.post('http://localhost:3002/students/authenticate', student_signin_args, function(data, res) {
                student_token = data.user.user_token;
                newAppBody.user_id = data.user.id;
                //ta_coordinator sign in/authenticate
                client.post('http://localhost:3002/ta-coordinators/sign-up', ta_coord_signin_args, function(data, res) {
                    client.post('http://localhost:3002/ta-coordinators/authenticate', ta_coord_signin_args, function(data, res) {
                        coordinator_token = data.user.user_token;
                        client.post('http://localhost:3002/students/sign-up', student_signin_args2, function(data, res) {
                            client.post('http://localhost:3002/students/authenticate', student_signin_args2, function(data, res) {
                                student_token2 = data.user.user_token;
                                //create an application using the id of the first student
                                let newApp = new Application(newAppBody);
                                newApp.save((err, doc) => {
                                    if (err) throw err;
                                    _id = doc._id;
                                    done();
                                });
                            });
                        });
                    });
                });
            });
        });
    });

    after(function(done) {
        // runs after each test in this block
        Application.remove({
            _id: _id
        }, function(err) {
            if (err) throw err;
            console.log("deleting " + _id);
        });
        done();
    });

    it('should return status 200 when finding all application as a TA', function(done) {
        chai.request(app)
            .get('/application')
            .set('x-access-token', coordinator_token)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('should return status 401 when finding an application as a student', function(done) {
        chai.request(app)
            .get('/application')
            .set('x-access-token', student_token2)
            .end(function(err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
    // it('should return status 404 if no application found', function(done) {
    //     chai.request(app)
    //         .get('/application')
    //         .query({
    //             user: 0
    //         })
    //         .end(function(err, res) {
    //             expect(res).to.have.status(404);
    //             done();
    //         });
    // });
    //
    // it('should return 409 if already applied to same posting', function(done) {
    //     chai.request(app)
    //         .post('/application')
    //         .send(newAppBody)
    //         .end(function(err, res) {
    //             expect(res).to.have.status(409);
    //             done();
    //         })
    // });
    //
    // it('should return 200 if successfully applied to posting', function(done) {
    //     let newAppBody2 = {
    //         user_id: "2",
    //         posting_id: "3",
    //         student_number: "4",
    //         first_name: "Tenzin",
    //         last_name: "Lama",
    //         phone_number: "444-4444",
    //         email: "tenzin@gmail.com",
    //         program: "Computer Science",
    //         year_of_study: "2017",
    //         department_explain: "department explain",
    //         work_status: "working",
    //         work_status_explain: "explination",
    //         student_status: "student",
    //         student_status_explain: "explination",
    //     }
    //     chai.request(app)
    //         .post('/application')
    //         .send(newAppBody2)
    //         .end(function(err, res) {
    //             expect(res).to.have.status(200);
    //             Application.remove(newAppBody2, function(err) {
    //                 if (err) throw err;
    //             })
    //             done();
    //         })
    // });
    //
    // it('should return 404 if no such application found by id', function(done) {
    //     chai.request(app)
    //         .get('/application/0')
    //         .end(function(err, res) {
    //             expect(res).to.have.status(404);
    //             done();
    //         });
    // });
    //
    // it('should return 200 if application found by id', function(done) {
    //     chai.request(app)
    //         .get('/application/' + _id)
    //         .end(function(err, res) {
    //             console.log(_id);
    //             expect(res).to.have.status(200);
    //             done();
    //         });
    // });
    //
    // it('should return 200 if successfully updated application', function(done) {
    //     let updatedApp = {
    //         first_name: "Shrey",
    //         last_name: "bruh",
    //         course_taken: ["CSC200", "CSC201"],
    //         previous_assignments: ["CSC499"]
    //     }
    //     chai.request(app)
    //         .put('/application/' + _id)
    //         .send(updatedApp)
    //         .end(function(err, res) {
    //             expect(res).to.have.status(200);
    //             expect(res.body.application.last_name).to.be.equal(updatedApp.last_name);
    //             expect(res.body.application.first_name).to.be.equal(updatedApp.first_name);
    //             expect(res.body.application.previous_assignments).to.be.deep.equal(updatedApp.previous_assignments);
    //             expect(res.body.application.course_taken).to.be.deep.equal(updatedApp.course_taken);
    //             done();
    //         });
    // });
    //
    // it('should return 404 if app not found when trying to put', function(done) {
    //     chai.request(app)
    //         .put('/application/' + '5349b4ddd2781d08c09890f3')
    //         .send({})
    //         .end(function(err, res) {
    //             expect(res).to.have.status(404);
    //             done();
    //         });
    // });
    //
    // it('should return 200 if successfully deleted', function(done) {
    //     chai.request(app)
    //         .delete('/application/' + _id)
    //         .end(function(err, res) {
    //             expect(res).to.have.status(200);
    //             done();
    //         });
    // });

});
