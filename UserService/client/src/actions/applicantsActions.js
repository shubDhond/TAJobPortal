console.log("in applicantsActions");

export function fetchApplicants(requestPromise) {
    return {
        type: 'FETCH_APPLICANTS',
        payload: requestPromise
    };
}

export function setApplicants(applicants) {
    return {
        type: 'SET_APPLICANTS',
        payload: applicants
    };
}