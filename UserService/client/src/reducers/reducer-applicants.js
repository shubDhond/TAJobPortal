export default function reducer(state={
	applicants: [],
	fetching: false,
	fetched: false,
	error: null,
	}, action) {

    switch (action.type) {
        case "SET_APPLICANTS": {
            return {
                ...state,
                applicants: action.payload,
            }
        }

        case 'FETCH_APPLICANTS_PENDING': {
            return {
                ...state,
                fetching: true,
                fetched: false,
            }
        }
        case 'FETCH_APPLICANTS_REJECTED': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload,
            }
        }
        case 'FETCH_APPLICANTS_FULFILLED': {
            var data = action.payload.data;
            var applicants = [];

            for(let i = 0 ; i < data.length ; i++){
                var id = data[i]._id;
                var user_id = data[i].user_id;
                var student_number = data[i].student_number;
                var first_name = data[i].first_name;
                var last_name = data[i].last_name;
                var phone_number = data[i].phone_number;
                var email = data[i].email;
                var program = data[i].program;
                var year_of_study = data[i].year_of_study;
                var department_explain = data[i].department_explain;
                var work_status = data[i].work_status;
                var work_status_explain = data[i].work_status_explain;
                var student_status = data[i].student_status;
                var student_status_explain = data[i].student_status_explain;
                var status = data[i].status;
                var previous_assignments = data[i].previous_assignments;
                var courses = data[i].course_taken;

                var obj = {
                    id: id,
                    user_id : user_id,
                    student_number: student_number,
                    first_name: first_name,
                    last_name: last_name,
                    phone_number: phone_number,
                    email: email,
                    program: program,
                    year_of_study: year_of_study,
                    department_explain: department_explain,
                    work_status: work_status,
                    work_status_explain: work_status_explain,
                    student_status: student_status,
                    student_status_explain: student_status_explain,
                    status: status,
                    previous_assignments: [previous_assignments],
                    courses : [courses]
                };

                applicants.push(obj);

            }
            return {
                ...state,
                applicants: [
                    ...applicants
                ],
                fetching: false,
                fetched: true,
                error: null,
            }
        }

        default:
            return state
    }
}