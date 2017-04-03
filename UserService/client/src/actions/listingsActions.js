export function fetchListings(requestPromise) {
  return {
    type: 'FETCH_LISTINGS',
    payload: requestPromise
  };
}

export function fetchListing(requestPromise) {
  return {
    type: 'FETCH_LISTING',
    payload: requestPromise
  };
}

export function queryListings(query) {
    return {
        type: 'QUERY_LISTINGS',
        query: query
    };
}

