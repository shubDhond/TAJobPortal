### **Arch.md: Slice the app and select middleware**

For server side technology, both applications will be using Node.js, Express js along with JWT and libraries including bcrypt-nodejs, body-parser, cookie-parser, debug, lodash, mongodb, mongoose, latest, morgan, node-rest-client, request, and request-promise.
The client side technology we&#39;ll be using is React.js.

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
