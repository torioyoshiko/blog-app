function postReducer(state = [], action) {
  if (action.type === 'ADD_POST') {
    return state.concat(action.payload)
  } if (action.type === 'FETCH_POSTS_SUCCESS') {
    return state.concat(action.payload)
  }
  return state
}

export default postReducer
