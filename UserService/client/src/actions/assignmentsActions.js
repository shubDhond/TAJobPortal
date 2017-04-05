export function createAssignment(promise) {
  return {
    type: 'CREATE_ASSIGNMENT',
    payload: promise
  }
}