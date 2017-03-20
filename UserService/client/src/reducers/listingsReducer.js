export default function reducer(state={
    listings: {
      1: {title: "CSC301", 
      description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.", 
      deadline: "2017-04-23"},
      2: {title: "CSC302", 
      description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.", 
      deadline: "2017-04-23"},
      3: {title: "CSC303", 
      description: "This course is an introduction to the theory and practice of large-scale software system design, development, and deployment. Topics include project management; advanced UML; reverse engineering; requirements inspection; verification and validation software architecture; performance modeling and analysis.", 
      deadline: "2017-04-23"}
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "SET_LISTINGS": {
        return {
          ...state,
          listings: action.payload,
        }
      }
      case "SET_RANKING": {
        var course = action.payload;

        return {...state, listings: 
          {...state.listings, 
            [course.id]:
              {...state.listings[course.id], 
                ranking: course.ranking}}}

      }
      default:
        return state
    }
}