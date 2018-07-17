const url = `${window.location.href}previousPosts`;

const getPosts = () => {

    console.log('posts loaded');
    fetch(url, {
        method: 'get'
    })
        .then(response => response.json())
        .then(response => response.data)
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log('Request failed ', error));
};

export default getPosts;