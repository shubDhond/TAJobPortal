
# proj-Awol Phase 2
## 1 What did you actually build during this phase?

Backend: Developed the schemas for all the the models. Course, Assignment and posting in the ta coordinator service and Application in the Applicant service. 
Developed a bare-bone functioning structure of all the routes of these models and services as mentioned in the swagger api documents. Added a few test for the routes, using mocha and chai and Travis setup for these tests. As well as scripts for these services to initially populate the database with dummy  data.



####TA Application Frontend: 


For this phase, we aimed to complete all of the routing and structure for the TA Application side. We created 3 main views for the application: Profile, Jobs and Inbox. The Profile view contains all of the information about the application. We realized that the applicants will have a lot of overlapping information that pertains to a job application, such as personal information. We wanted to get rid of the hassle of inserting the same information so we created the Profile page. The Jobs view provides the applicant with a display of all available postings. Applicants are able to go through the list and each listing is linked to an information page, that provides more information about the position and then the applicant can proceed to rank these according to their preference. There is also a static list that displays the ranked courses that the applicant has shown interest in. The ranking list is completely dynamic and changes whenever a preference on a course has changed. Finally, the Inbox view will be the center for all of the listings the applicant has applied to, as well as all of the responses from these applications.



#### TA-Coordinator Frontend:


For the TA-Coordinator side, we split the page into two parts. One side for all the applicants (Applicants - left side) and the other for all the job postings(Courses - right side). The applicants are positioned in an accordion style panel with their name and student number. Right below it is the student’s information and the rankings of their prefered opportunities. The ranking is organized in descending order from left to right. Once you click on the applicant, the accordion style will drop and more information about the applicant will appear. We have a search bar for each applicant's’’ side and the courses’ side. We also have a sort button that allows the applicants and courses to be sorted by different categories. The search bar and the sort button are individual from applicants and courses so that the TA-Coordinator can view each side individually. On the courses’ side, there’s a button to add a new ad. The course’s are displayed one after another. The course code is displayed with the status of the course. The status determines whether the course has been assigned TAs or not. 



#### Testing: 


There are a number of unit tests for the Ta-Coordinator service and User service. We utilize the chai-mocha library for unit testing. These tests extensively check the api endpoints and make sure the correct response is returned in a particular situation. A database script was implemented to load preliminary course data. The script calls the Cobalt api which returns a list of computer science courses from University of Toronto. It will then fill the local database with information for all the computer science courses. 
			
## 2 How is this different from what you originally proposed? Why?
We added the idea of a dual page design after our phase 1 as well as the idea of ranking 
Courses rather than applying to each one individually. The changes were made after David the UX guy thought about ways to simplify the design and cut down on the number of pages that we’d have to make. We found that these changes allow us to spend more time on the UX of the app and less time on the boilerplate part, while at the same time, adhering to our previously proposed scope.
## 3 High-level design of your software.
	Our TA management system consists of three microservices and two front end applications. The User Service handles all authentication and serving of static files. The TA Coordinator Service handles all data and operations relavant to the coordinator. The Applicants Service handles all data and operations relevant to students and coordinators with regard to applications for TA positions. The Student app is the client facing application for students to apply for, and view TA positions. The Coordinator app is the client facing application for coordinators to manage TA positions and assigning applicants.

![Alt text](../phase1/service_diagram.png?raw=true "Optional Title")
## 4 Technical highlights: interesting bugs, challenges, lessons learned, observations, etc.
One interesting? bug multiple front end engineers faced due to the nature of using redux for FE state management was components? not rerendering on state change. This was due to the mutation of state which is not allowed in redux. Mutation of state conflicts with the state differentiation logic used to rerender components. To avoid making this mistake we used the redux-freeze redux middleware. This middleware throws errors on mutation of state so the root cause of the rerendering bugs can be caught. Below is the link to the piece of code which adds this middleware:
	
https://github.com/csc302-2017-spring/proj-Awol/blob/master/UserService/client/src/store.js 	


	Most challenging part for backend development was when defining the schemas for the mongo clusters, so as to decouple the services as much as we can without any major dependencies of one service to another. We learned that we can’t always have consistencies of data as well as availability of services, when doing microservices (or any distributive system architecture) but we should strive for eventual consistency, and maximum availability of services. And define schemas and routes to support our goal. 
Setting up travis CI was also one of the challenges, our team members faced during this phase. And we are still working on getting test coverage when it comes to testing our backend
## 5 Reflect on your teamwork and process. What worked well, what  needs Improvement.

	

	We had 2 people work on the backend, 4 on frontend and 1 on writing tests and writing the script to generate test data. In terms of front-end, David the PM split up the work into 2 sides, the ta-app and the ta-coord (coordinator). Since they were basically separate web apps, we were able to build them both simultaneously rather smoothly. Raf, Wayne, and John worked on making the architecture, Basic layout, and functionality while David went over all the front end work, styled it, added polish and necessary edits, and finalized the PRs. The process worked great overall with a relatively fair share of workload. When everyone followed correct version control practices, and was in the loop, we were able to make great progress. The only time we felt the need for improvements were when these git best practices weren’t followed and people weren’t all on the same page.

## 6 Ideally you will have specific artifacts from your development process to show (for instance, a burndown chart)
Unfortunately all of our communications were by bi-weekly group meetings and facebook chats. We did not opt to go the way of Trello boards because we were all good friends before this project and have worked on multiple projects before, so Trello was just extra unnecessary bureaucracy. While we can’t post our FB messages in the group chat, you can tell by the number of branches and branch names that everyone had a strong sense of what had to be done and completed small tasks at a time. Also, a lot of development was done in proximity to each other. For example, we would spend days where we all met up and developed it side by side. As well, we had a defined PM, David, keep track of the progress, and set goals. Therefore we did not find the need to use formal tracking too.
We did however, [make mockups so that the front-end engineers]( https://github.com/csc302-2017-spring/proj-Awol/tree/master/docs/mockups) had a clear focused goal of the final product. 





The following link has the history of the contributions from the last week:
(https://github.com/csc302-2017-spring/proj-Awol/graphs/contributors)
## 7 Triage: What will you build for phase 3, the final demo?
For phase 3, we aim to connect both the backend and the frontend of the application. The frontend design and UI should should look exactly like the mockup files. (https://github.com/csc302-2017-spring/proj-Awol/tree/master/docs/mockups). We will be demoing frontend features like the drag and drop for TA assignments, search and sort for the applicants and course listings, as well as the side by side panel interface where clicking on a course from the applicant side can load up the selected course on the course panel side. 

Backend: More test coverage for routes of all the services, adding validations on the request data for all the post and get requests of the services. Middleware for services which verifies the roles of the users and only exposes the certain resources to certain users. 















