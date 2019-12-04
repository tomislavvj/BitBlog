import React from 'react'
import { Link } from "react-router-dom"
import { fetchPost } from "../../../services/PostServices"

class PostItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []

        }
    }

    componentDidMount() {
        fetchPost()
            .then(postovi => {
                this.setState({ posts: postovi })
                console.log(postovi);
            })
    }

    render() {
        const Posts = this.state.posts.map(post => (
            <li>

                <h3 className="postTitle"><Link to={`/post/${post.titleID}`}>{post.title}</Link></h3>
                <p className="titleBody">{post.description}</p>

            </li>

        ))

        return (
            <div className="mainDiv">
                <ul className="ulPosts">
                    {Posts}
                </ul>
            </div>
        )
    }

}

export default PostItem