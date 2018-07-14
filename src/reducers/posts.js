export const getPosts = () => dispatch => {
        console.log('posts loaded');
        dispatch({ type: 'FETCH_POSTS', payload: [] });
};