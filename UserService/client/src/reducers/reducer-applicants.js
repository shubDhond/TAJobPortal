// export default function() {
// 	return [
// 		{
// 			id: 1,
// 			student_id: 1000123123,
// 			first_name: "Larry",
// 			last_name: "Jones",
// 			details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
// 			courses: ["csc301", "csc 302", "csc303"]
// 		},
// 		{
// 			id: 2,
// 			student_id: 1000234234,
// 			first_name: "Kevin",
// 			last_name: "Johnson",
// 			details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
// 			courses: ["csc301", "csc 302", "csc303"]
// 		},
// 		{
// 			id: 3,
// 			student_id: 1000345345,
// 			first_name: "Bill",
// 			last_name: "James",
// 			details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
// 			courses: ["csc301", "csc 302", "csc303"]
// 		},
// 		{
// 			id: 4,
// 			student_id: 1000345345,
// 			first_name: "Will",
// 			last_name: "James",
// 			details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
// 			courses: ["csc301", "csc 302", "csc303"]
// 		},
// 		{
// 			id: 5,
// 			student_id: 1000345345,
// 			first_name: "Ian",
// 			last_name: "James",
// 			details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
// 			courses: ["csc301", "csc 302", "csc303"]
// 		},
// 		{
// 			id: 6,
// 			student_id: 1000345345,
// 			first_name: "Jason",
// 			last_name: "James",
// 			details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
// 			courses: ["csc301", "csc 302", "csc303"]
// 		},
//         {
//             id: 7,
//             student_id: 1000345345,
//             first_name: "Ian",
//             last_name: "James",
//             details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
//             courses: ["csc301", "csc 302", "csc303"]
//         },
//         {
//             id: 8,
//             student_id: 1000345345,
//             first_name: "Ian",
//             last_name: "James",
//             details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
//             courses: ["csc301", "csc 302", "csc303"]
//         },
//         {
//             id: 9,
//             student_id: 1000345345,
//             first_name: "Ian",
//             last_name: "James",
//             details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
//             courses: ["csc301", "csc 302", "csc303"]
//         },
//         {
//             id: 10,
//             student_id: 1000345345,
//             first_name: "Ian",
//             last_name: "James",
//             details: "Ted ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
//             courses: ["csc301", "csc 302", "csc303"]
//         },
// 	]
// }

export default function reducer(state={
	applicants: {},
	fetching: false,
	fetched: false,
	error: null,
	}, action) {

    switch (action.type) {

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
            var applicants={};

            for(let i = 0 ; i < data.length ; i++){
                var id = data[i]._id;
                var user_id = data[i].user_id;
                var student_number = data[i].student_number;
                var first_name = data[i].first_name;
                var last_name = data[i].last_name;

                var obj = {
                    user_id : user_id,
                    student_number: student_number,
                    first_name: first_name,
                    last_name: last_name
                };

                applicants[id] = obj;


            }
            return {
                ...state,
                applicants: {
                    ...applicants
                },
                fetching: false,
                fetched: true,
                error: null,
            }
        }

        default:
            return state
    }
}