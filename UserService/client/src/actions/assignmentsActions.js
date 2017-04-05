export function createAssignment(promise) {
  return {
    type: 'CREATE_ASSIGNMENT',
    payload: promise
  }
}

export function getAssignments(promise) {
  return {
    type: 'GET_ASSIGNMENTS',
    payload: promise
  }
}
