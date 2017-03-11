/**
 * Created by TenzinLama on 2017-03-7.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app');
chai.use(chaiHttp);

//basic test for now...
describe('posting', function(){
  this.timeout(0);
  it('should return status 200', function(done){
    chai.request(app)
    .get('/posting')
    .end(function(err,res){
      expect(res).to.have.status(200);
      done();
    });

  });
})
