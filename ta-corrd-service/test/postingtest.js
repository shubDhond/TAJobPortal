/**
 * Created by TenzinLama on 2017-03-7.
 */
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let Client = require('node-rest-client').Client;
let client = new Client();

let app = require('../app');
chai.use(chaiHttp);

basic test for now...
describe('posting', function(){
  this.timeout(0);
  before(function(done){
    //sign up for a student account and ta account
    //create a posting
    
  });
  it('should return status 200', function(done){
    chai.request(app)
    .get('/posting')
    .end(function(err,res){
      expect(res).to.have.status(200);
      done();
    });

  });
});
