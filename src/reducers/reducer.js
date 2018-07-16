function postReducer (state = [], action) {

    if (action.type === 'ADD_POST') {
        return state.concat([action.data]);
    } else if (action.type === 'FETCH_POSTS_SUCCESS'){
        return action.payload;
    } else {
        return state;
    }

};

export default postReducer;