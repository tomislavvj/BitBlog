import React from 'react'
import { Link } from "react-router-dom"
import { fetchSinglePost } from '../../../services/PostServices'


/* const SinglePost = (props) => {
    return (
        <>


            <h1>SINGLE POST TITLE</h1>

            <Link to="/SingleAuthor">Author Name</Link>


            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>

        </>
    )
} */


class SinglePost extends React.Component {
    constructor(props) {
        super(props)

        this.id = this.props.match.params.id

        this.state = {
            loading: true,
            post: null,
        }
    }

    getPost() {
        fetchSinglePost(this.id)
            .then(post =>
                this.setState({ post, loading: false })
            )
    }

    componentDidMount() {
        this.getPost()
    }

    render() {
        if (this.state.loading) {
            return <div>Page is loading...</div>
        }

        return (
            <div className="container1">
                <h1>Group of highly trained monkeys is working on your App!! Please Wait...</h1>
                {/* <AuthorName author={this.state.posts.userId} /> */}
                <h2>{this.state.post.title}</h2>

            </div>
        )
    }
}


export default SinglePost 