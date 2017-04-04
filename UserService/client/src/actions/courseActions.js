export function setCourses(state) {
  return {
          type: "SET_COURSES",
          payload: {
              title: state.title,
              description: state.description,
              deadline: state.deadline,
              status: state.status,
              showComponent: state.showComponent,
          }
      }
}
