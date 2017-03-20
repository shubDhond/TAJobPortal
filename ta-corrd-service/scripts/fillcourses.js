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

client.get(cobaltCoursesUrl, args, function(data, response){
  console.log(data.length)
  forEach(data,function(item,index,arr){

    let args2 = {
      data:{
        course_code: item.code,
        ta_needed: 5,
        term: item.term.slice(5, item.term.length),
        year: Number(item.term.slice(0,4))
      },
      headers: {
        "Content-Type": "application/json"
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
