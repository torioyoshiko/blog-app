const postReducer = (state = [], action) => {

    if (action.type === 'ADD_POST') {
        return state.concat([action.data]);
    } else {
        return state;
    }
};

export default postReducer;