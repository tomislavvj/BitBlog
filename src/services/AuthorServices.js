import Author from "./Author"


const fetchAuthors = () => {
    const url = "https://jsonplaceholder.typicode.com/users"


    return (fetch(url)
        .then(res => res.json())
        .then(data => {
            const MyAuthors = data.map(authorData => {
                return new Author(authorData)
            })
            return MyAuthors
        }))

}




const fetchOneAuthor = (id) => {
    const url = "https://jsonplaceholder.typicode.com/users/" + id

    return fetch(url)
        .then(res => res.json())
        .then(apiAuthor => new Author(apiAuthor))



}

export { fetchAuthors, fetchOneAuthor }