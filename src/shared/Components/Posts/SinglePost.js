import React from 'react'

import { fetchSinglePost } from '../../../services/PostServices'
import { fetchOneAuthor } from '../../../services/AuthorServices'
import { Link } from "react-router-dom"



class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.id = this.props.match.params.id

        this.state = {
            loading: true,
            post: null,
            author: null
        }
    }

    getAuthor() {
        fetchOneAuthor(this.id)
            .then(author =>
                this.setState({ author: author })
            )
    }

    getPost() {
        fetchSinglePost(this.id)
            .then(post =>
                this.setState({ post, loading: false })
            )
    }

    componentDidMount() {
        this.getPost()
        this.getAuthor()

    }


    render() {
        if (this.state.loading) {
            return <div>Page is loading...</div>
        }

        return (
            <div className="container1">
                <h3 ><Link to={`/author/${this.state.author.id}`}>{this.state.author.name}</Link></h3>
                <h2>{this.state.post.description}</h2>

            </div>
        )
    }
}


export default SinglePost 