var loadPost = [
    {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque et excepturi exercitationem explicabo hic, omnis repellat soluta ullam voluptate!'
    }
];

export const getPosts = () => dispatch => {
        console.log('posts loaded');
        dispatch({ type: 'FETCH_POSTS', payload: loadPost});
};