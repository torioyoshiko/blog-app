function postReducer (state = [], action) {

    if (action.type === 'ADD_POST') {
        return state.concat(action.payload)
    } else if (action.type === 'FETCH_POSTS_SUCCESS'){
        return state.concat(action.payload)
    } else {
        return state;
    }

};

export default postReducer;