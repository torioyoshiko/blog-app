const url = 'http://localhost:3001/posts'
const fetchSuccess = 'FETCH_POSTS_SUCCESS'

const getPosts = () => dispatch => fetch(url, {
  method: 'get',
})
  .then(response => response.json())
  .then((data) => {
    dispatch({ type: fetchSuccess, payload: data })
  })
  .catch(error => console.log('Request failed ', error))

export default getPosts
