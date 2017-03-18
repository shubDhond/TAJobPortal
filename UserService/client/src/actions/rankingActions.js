export function setRanking(state, newRanking) {
  return {
          type: "SET_RANKING",
          payload: {
              id: state.id,
              title: state.title,
              description: state.description,
              deadline: state.deadline,
              ranking: newRanking
          }
      }
}

