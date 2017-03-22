let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;

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
};
describe('ApplicantService', function(){
  this.timeout(0);
  beforeEach(function(done){
    let newApp = new Application(newAppBody);
    newApp.save((err) => {
      if(err) throw err;
    });
    done();
  });

  it('should return status 200 when finding an application', function(done){
    chai.request(app)
    .get('/application')
    .end(function(err,res){
      expect(res).to.have.status(200);
      done();
    });
  });


})
