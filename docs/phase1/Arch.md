### **Arch.md: Slice the app and select middleware**

Our product will be split into two client facing applications, one for the TA coordinators and one for the student applicants. On the server side we will be hosting three services, the users service, the applications service, and the ta coordinators service. The users service will handle user sign up and authentication and serving all static files for both applications. The applications service will support all actions associated with student applications to postings. The ta coordinators service will support all actions associates with job postings, assignments and courses. All services will be used by both applications to support the use cases.

Below is a diagram illustrating the communication:

![Alt text](./service_diagram.png?raw=true "Optional Title")

For server side technologies, both applications will be using Node.js, Express js along with JWT and libraries including bcrypt-nodejs, body-parser, cookie-parser, debug, lodash, mongodb, mongoose, latest, morgan, node-rest-client, request, and request-promise.
The client side technologies we'll be using are React.js for the views with redux for front end state management.

The list of use cases that we will cover for the Applicants app are
- Identify self by logging in with uTORID
- Apply for TAship: Applicant fills out job application listing with personal information
  - familyname
  - givennames
  - phonenumber
  - studentnumber
  - emailaddress
  - program (UG, MSC, MSAC, PHD)
  - Year of program (first year, second year, etc)
  - studentdepartment
  - studentdepartmentexplain
  - workstatus
  - workstatusexplain
  - studentstatus
  - studentstatusexplain
  - Courses TA&#39;d in the past (and how many times)
  - Courses taken in the past, with optional way for non-UofT students to describe each course
- Mark profile as complete and ready to be considered for employment.

For the TA-coord app, the list of use cases we will cover are
- Enter, upload, or call out on API for courses for term
- Enter &quot;ad&quot; requirements and qualifications for each course
- Enter projected course enrollment
- Reject applicant
- Assign set of applicants to course
- Identify named set of applicants
- Share named set of provisional applicants (presumably for discussion with course instructor)
- Search for unassigned applicants
  - By previous experience
  - By program
  - By preferred courses
  - By year of program
  - By courses applicant has taken in the past
  - By arbitrary other fields in Applicant records.
  - Heretofore rejected
  - By grad vs UG
  - By whether applicant has been offered and declined a course in the past
  - By whether applicant applied on time.
- See applicant record (all information applicant entered)
- Flag applicant as ever having declined offer
- Unassign applicant(s) to course
- Unassign assignees
- Move assignee(s) from one course to another
- List unassigned applicants
- List openings



