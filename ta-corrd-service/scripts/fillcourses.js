let Client = require('node-rest-client').Client;
let client = new Client();
let Config = require('../config');
var forEach = require('async-foreach').forEach;

let args = {
  headers:{
    'Authorization': Config.COBALT_API_KEY
  },
  parameters: {
    q: "code:'csc' AND campus: 'UTSG'",
    limit: '100'
  }
}
let cobaltCoursesUrl = 'https://cobalt.qas.im/api/1.0/courses/filter';
let coordinator_token;
client.get(cobaltCoursesUrl, args, function(data, response){
  //sign up for a TA coordinator account
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
  client.post('http://localhost:3002/ta-coordinators/sign-up', ta_coord_signin_args, function(data1,res){
    client.post('http://localhost:3002/ta-coordinators/authenticate', ta_coord_signin_args, function(data2,res){
      coordinator_token = data2.user.user_token;
      forEach(data, function(item,index,arr){

        let args2 = {
          data:{
            course_code: item.code,
            ta_needed: 5,
            term: item.term.slice(5, item.term.length),
            year: Number(item.term.slice(0,4))
          },
          headers: {
            "Content-Type": "application/json",
            "x-access-token": coordinator_token
          }
        }
        client.post(Config.BASE_URL + 'course', args2, function(data,response){
          if (response.statusCode == 200) {
            console.log("Added " +  item.code + ' to database');
          } else {
            console.log("error " + data.message);
          }
        });

        var done = this.async();
        setTimeout(done, 50);

      });
    });
  });

});
