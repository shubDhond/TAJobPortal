/**
 * Created by TenzinLama on 2017-03-7.
 */
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
let User = require('../models/User');
let keygenerator = require('keygenerator');
let uuid = require('uuid/V4');
let CoordinatorAccessKey = require('../models/CoordinatorAccessKey');
let app = require('../app');
chai.use(chaiHttp);

let token;
let user_email;

describe('taCoordinator', function () {
    this.timeout(0);

    beforeEach(function (done) {
      x_coordinator_account_key = 0;
      let accessKey = new CoordinatorAccessKey({
          id: uuid(),
          key: keygenerator._()
      });
      //create coordinator access key
      accessKey.save((err) => {
          if (err) throw err;
          x_coordinator_account_key = accessKey.key;
          User.remove({}, function (err) {
            if (err) throw err;

            chai.request(app)
                .post('/ta-coordinators/sign-up')
                .set('x-coordinator-account-key', x_coordinator_account_key)
                .send({
                    email:'test',
                    id: 'test',
                    password: 'test',
                    user_type: 'ta-coordinator'
                })
                .end(function (err, res) {
                    expect(res).to.have.status(201);
                    token = res.body.user.user_token;
                    user_email = res.body.user.email;
                    done();
                  });
                });
              });
            });
    //console.log(token);
    it('should return successfull authentication', function(done){
      chai.request(app)
      .post('/ta-coordinators/authenticate')
      .set('x-access-token', token)
      .send({
          email: user_email
      })
      .end(function(err, res){
        expect(err).to.be.notFound;
        expect(res).to.have.status(200);
        done();
      })
    });
  });
