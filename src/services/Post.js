class Post {
    constructor(postData) {
        console.log(postData)
        this.userID = postData.userId
        this.titleID = postData.id
        this.title = postData.title
        this.description = postData.body
    }
}


export default Post