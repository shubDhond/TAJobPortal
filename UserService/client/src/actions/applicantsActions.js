console.log("in applicantsActions");

export function fetchApplicants(requestPromise) {
    return {
        type: 'FETCH_APPLICANTS',
        payload: requestPromise
    };
}