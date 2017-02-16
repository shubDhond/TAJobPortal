# Scope

As a team, we have decided that we would like to focus most of our attention and productivity on the TA-Coordinator System as it has more working parts which we would all benefit most from learning. For the TA Application system, we plan on building the most essential parts of the application which allow us full functionality with the TA-Coordinator System that we plan to build. We decided to divide the team into front-end and back-end, and therfore there are different learning goals for each side. We are all new to micro-services and hope to become more knowledgable of the area. On the front-end side, we are looking to master the React library and become more familiar with all the front-end development practices.

We believe one of the greatest challenges of this system will be some of the search functionalities in the use cases. Another reason why we plan on focusing more on the TA-Coordinator system.

## TA Application system use cases:

1.	Identify self by logging in with uTOR (Assuming for now that all applicants have utorid).
2.	~~For identifiable applicants recover profile from previous semester.~~
3.	Apply for TAship: Applicant fills out job application listing their personal information, as above.
    1.	Fill in personal information:
        1.	familyname
        2.	givennames
        3.	phonenumber
        4.	studentnumber
        5.	emailaddress
    2.	Fill in details of status at UofT:
        1.	program (UG, MSC, MSAC, PHD)
        2.	Year of program (first year, second year, etc)
        3.	studentdepartment
        4.	studentdepartmentexplain
        5.	workstatus
        6.	workstatusexplain
        7.	studentstatus
        8.	studentstatusexplain
    3.	Fill in Academic history:
        1.	Courses TA’d in the past (and how many times)
    4.	Fill in higher education work history
        1.	Courses taken in the past, with optional way for non-UofT students to describe each course
4.	~~Save an incomplete profile~~
5.	~~Resume editing a previously saved (likely incomplete) profile~~
6.	Doit! Mark profile as complete and ready to be considered for employment.
    1.	This sets dateofapplication
7.	~~Identify preference for courses by rating them 1 through 5.~~

We removed uses cases 2, 4, 5, and 7 from the TA Application system as they aren’t essential to the application.

## TA-COORD System use cases:

1.	Enter, upload, or call out on API for courses for term
2.	Enter “ad” requirements and qualifications for each course
3.	~~Enter instructor assignment~~
4.	Enter projected course enrollment
5.	~~Enter instructors requests, anti-requests~~
6.	Reject applicant
7.	~~Unreject applicant~~
8.	Assign set of applicants to course
9.	Identify named set of applicants
10.	Share named set of provisional applicants (presumably for discussion with course instructor)
11.	Search for unassigned applicants
    1.	By previous experience
    2.	By program
    3.	By preferred courses
    4.	By year of program
    5.	By courses applicant has taken in the past
    6.	By arbitrary other fields in Applicant records.
    7.	Heretofore rejected
    8.	By grad vs UG
    9.	By whether applicant has been offered and declined a course in the past
    10.	By whether applicant applied on time.
12.	See applicant record (all information applicant entered)
13.	Flag applicant as ever having declined offer
14.	Unassign applicant(s) to course
15.	Unassign assignees
16.	Move assignee(s) from one course to another
17.	List unassigned applicants
18.	List openings

We removed uses cases 3, 5, and 7.

