const url = `http://localhost:3001/posts`;

const getPosts = () => (dispatch) => {
    return fetch(url, {
        method: 'get'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'FETCH_POSTS_SUCCESS', payload: data})
        })
        .catch(error => console.log('Request failed ', error));
};

export default getPosts;
