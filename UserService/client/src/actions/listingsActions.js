export function fetchListings() {
    return {
        type: "FETCH_LISTINGS_FULFILLED",
        payload: [
            {title: "CSC301",
                description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.",
                deadline: "2017-04-23",
                status: "ASSIGNED"},
            {title: "CSC302",
                description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.",
                deadline: "2017-04-23",
                status: "ASSIGNED"},
            {title: "CSC303",
                description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.",
                deadline: "2017-04-23",
                status: "UNASSIGNED"}]
    }
}