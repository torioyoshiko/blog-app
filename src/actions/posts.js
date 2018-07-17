const url = `http://localhost:3000/posts`;

const getPosts = () => {
    fetch(url, {
        method: 'get'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log('Request failed ', error));
};

export default getPosts;