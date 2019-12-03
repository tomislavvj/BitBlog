import Post from "./Post"

const fetchPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"


    return fetch(url)
        .then(res => res.json())
        .then(data => {


            const MyPosts = data.results.map(postData => {
                return new Post(postData)
            })
            return MyPosts
        })

}
export { fetchPost }