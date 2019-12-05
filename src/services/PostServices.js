import Post from "./Post"




const fetchPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"


    return (fetch(url)
        .then(res => res.json())
        .then(data => {
            const MyPosts = data.map(postData => {
                return new Post(postData)
            })
            return MyPosts
        }))

}




const fetchSinglePost = (id) => {
    const url = "https://jsonplaceholder.typicode.com/posts/" + id

    return fetch(url)
        .then(res => res.json())
        .then(apiPost => new Post(apiPost))

}

export { fetchPost, fetchSinglePost }

