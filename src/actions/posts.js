var previosPosts = [
    {
        id: 1,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, repellat?'
    },
    {
        id: 2,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, repellat?'
    },
    {
        id: 3,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, repellat?'
    },
    {
        id: 4,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, repellat?'
    },
    {
        id: 5,
        name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, repellat?'
    }
];

const getPosts = () => dispatch => {
    console.log('posts loaded');
    dispatch({type: 'FETCH_POSTS_SUCCESS', payload: previosPosts});
};

export default getPosts;