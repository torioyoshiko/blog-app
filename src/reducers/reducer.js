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

/*
function postReducer(store = {}, {payload, type}) {
    switch (type) {
        case ADD_POST_REQUEST: //отправка запроса на бэк
            return {
                ...store,  //это object destructuring
                postResponse: {isLoaded: false, isFetching: true, isError: false, error: null} ///здесь отчищаются предыдущие значения и устанавливается что начинается загрузка
            };
        case ADD_POST_SUCCESS: //успешный ответ с бэка
            return {
                ...store,
                postResponse: {isLoaded: true, isFetching: false, post: payload}, //записывается что загрузилось и закидывается свой пост в этот стейт
                postsResponse: {
                    ...store.postsResponse, //не изменяются предыдущие значения
                    posts: [...store.posts, payload] //и через object destructuring добавляется новый объект в конец массива
                }
            };
        case ADD_POST_FAILURE:
            return {...store, postResponse: {isLoaded: false, isFetching: false, isError: true, error: payload}}; //добавление ошибки
        default:
            return store;
    }
}

export default postReducer;*/
