export function sendOffer(promise) {
  return {
    type: 'SEND_OFFER',
    payload: promise
  }
}
