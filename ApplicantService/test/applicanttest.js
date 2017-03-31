// let chai = require('chai');
// let chaiHttp = require('chai-http');
// let expect = chai.expect;
//
// let app = require('../app');
// let Application = require('../models/application');
// chai.use(chaiHttp);
//
// let newAppBody = {
//   user_id: "1",
//   posting_id: "2",
//   student_number: "3",
//   first_name: "Tenzin",
//   last_name: "Lama",
//   phone_number: "444-4444",
//   email: "tenzin@gmail.com",
//   program: "Computer Science",
//   year_of_study: "2017",
//   department_explain: "department explain",
//   work_status: "working",
//   work_status_explain: "explination",
//   student_status: "student",
//   student_status_explain: "explination",
//   course_taken: ["CSC301", "CSC302"],
//   previous_assignments: ["CSC428", "csc400"]
// };
// let _id;
//
// describe('ApplicantService', function(){
//   this.timeout(0);
//   before(function(done){
//     let newApp = new Application(newAppBody);
//     newApp.save((err, doc) => {
//       if(err) throw err;
//       _id = doc._id;
//     });
//     done();
//   });
//
//   after(function(done) {
//     // runs after each test in this block
//     Application.remove({_id:_id}, function(err){
//       if (err) throw err;
//       console.log("deleting " + _id);
//     });
//     done();
//   });
//
//   it('should return status 200 when finding an application', function(done){
//     chai.request(app)
//     .get('/application')
//     .end(function(err,res){
//       expect(res).to.have.status(200);
//       done();
//     });
//   });
//
//   it('should return status 404 if no application found', function(done){
//     chai.request(app)
//     .get('/application')
//     .query({user: 0})
//     .end(function(err,res){
//       expect(res).to.have.status(404);
//       done();
//     });
//   });
//
//   it('should return 409 if already applied to same posting', function(done){
//     chai.request(app)
//     .post('/application')
//     .send(newAppBody)
//     .end(function(err,res){
//       expect(res).to.have.status(409);
//       done();
//     })
//   });
//
//   it('should return 200 if successfully applied to posting', function(done){
//     let newAppBody2 = {
//       user_id: "2",
//       posting_id: "3",
//       student_number: "4",
//       first_name: "Tenzin",
//       last_name: "Lama",
//       phone_number: "444-4444",
//       email: "tenzin@gmail.com",
//       program: "Computer Science",
//       year_of_study: "2017",
//       department_explain: "department explain",
//       work_status: "working",
//       work_status_explain: "explination",
//       student_status: "student",
//       student_status_explain: "explination",
//     }
//     chai.request(app)
//     .post('/application')
//     .send(newAppBody2)
//     .end(function(err,res){
//       expect(res).to.have.status(200);
//       Application.remove(newAppBody2, function(err){
//         if(err) throw err;
//       })
//       done();
//     })
//   });
//
//   it('should return 404 if no such application found by id', function(done){
//     chai.request(app)
//     .get('/application/0')
//     .end(function(err,res){
//       expect(res).to.have.status(404);
//       done();
//     });
//   });
//
//   it('should return 200 if application found by id', function(done){
//     chai.request(app)
//     .get('/application/' + _id)
//     .end(function(err,res){
//       console.log(_id);
//       expect(res).to.have.status(200);
//       done();
//     });
//   });
//
//   it('should return 200 if successfully updated application', function(done){
//     let updatedApp = {
//       first_name: "Shrey",
//       last_name: "bruh",
//       course_taken: ["CSC200", "CSC201"],
//       previous_assignments: ["CSC499"]
//     }
//     chai.request(app)
//     .put('/application/' + _id)
//     .send(updatedApp)
//     .end(function(err,res){
//       expect(res).to.have.status(200);
//       expect(res.body.application.last_name).to.be.equal(updatedApp.last_name);
//       expect(res.body.application.first_name).to.be.equal(updatedApp.first_name);
//       expect(res.body.application.previous_assignments).to.be.deep.equal(updatedApp.previous_assignments);
//       expect(res.body.application.course_taken).to.be.deep.equal(updatedApp.course_taken);
//       done();
//     });
//   });
//
//   it('should return 404 if app not found when trying to put', function(done){
//     chai.request(app)
//     .put('/application/' + '5349b4ddd2781d08c09890f3')
//     .send({})
//     .end(function(err,res){
//       expect(res).to.have.status(404);
//       done();
//     });
//   });
//
//   it('should return 200 if successfully deleted', function(done){
//     chai.request(app)
//     .delete('/application/' + _id)
//     .end(function(err,res){
//       expect(res).to.have.status(200);
//       done();
//     });
//   });
//
// });
