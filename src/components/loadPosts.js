export default function loadPosts(url) {
    fetch('/posts.json')
        .then(function (response) {
            return response.json()
        }).then(function(json) {
        console.log('parsed json', json)
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    })
}
