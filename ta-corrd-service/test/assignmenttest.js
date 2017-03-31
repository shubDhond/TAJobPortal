/**
 * Created by TenzinLama on 2017-03-7.
 */
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let app = require('../app');
chai.use(chaiHttp);

//basic test for now...
// describe('assignments', function(){
//   this.timeout(0);
//   it('should return status 200', function(done){
//     chai.request(app)
//     .get('/assignment')
//     .end(function(err,res){
//       expect(res).to.have.status(200);
//       done();
//     });
//
//   });
// })
