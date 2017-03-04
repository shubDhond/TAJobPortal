<b>Libraries and plugins </b>
  <ul>
    <li>Chai-mocha</li>
    <li>Chai-http</li>
  </ul>
  
  Mocha is a javascript framework for Node.js which allows asynchronous testing 
  <br>
  Chai is an assertion library 
  <br>
  Chai-http is a response assertion npm package which will be used to test our API routes
  

<b>Back-End Testing</b>

   We will utilize the chai-http and chai-mocha npm packages for back-end testing. For the testing process, the back-end team will write basic test cases when developing a new feature and ensure that the core functionality is working properly. The tester (Tenzin) will then write more extensive test cases for those features while the back-end team continues to refactor the code. This will be the ensure 100% test coverage. Both unit and integration tests will be utilized to ensure complete testing.
   
   
<b>Front-End Testing</b>

  For front-end testing, we can make use of the chai-mocha npm package for testing functionaility. The front-end testing process will be similar to the backend testing process where the development team will test core functionality and then the tester (Tenzin) will write tests to ensure 100% coverage.

<b>Travis CI</b>

 Travis will be run on all remote branches and will only allow the merging of branches that pass all tests and coverage. We will make sure to have good test coverage. The aim is to cover 100% of all the functionality we want to provide. This will be done by writing extensive unit/integration tests for any functions and endpoints that are testable.


 

 
