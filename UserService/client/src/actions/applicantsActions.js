function setApplicants() {
    return {
        type: "SET_APPLICANTS",
        payload: {
            1: {title: "CSC301",
                description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.",
                deadline: "2017-04-23",
                status: "ASSIGNED",
                ranking: null
            },
            2: {title: "CSC302",
                description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.",
                deadline: "2017-04-23",
                status: "UNASSIGNED",
                ranking: null},
            3: {title: "CSC303",
                description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.",
                deadline: "2017-04-23",
                status: "ASSIGNED",
                ranking: null}
        }
    }
}

export function fetchApplicants(requestPromise) {
    return {
        type: 'FETCH_APPLICANTS',
        payload: requestPromise
    };
}