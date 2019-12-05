import React from 'react'
import AuthorInfo from "./AuthorInfo"
import AuthorAddress from "./AuthorAddress"
import AuthorCompany from "./AuthorCompany"
import { Link } from "react-router-dom"
import { fetchOneAuthor } from "../../../services/AuthorServices"



class SingleAuthor extends React.Component {

    constructor(props) {
        super(props)
        this.id = this.props.match.params.id
        this.state = {
            loading: true,
            author: null
        }
    }


    getAuthor() {
        fetchOneAuthor(this.id)
            .then(author =>
                this.setState({ author, loading: false })
            )
    }

    componentDidMount() {
        this.getAuthor()
    }
    render() {
        if (this.state.loading) {
            return <div>Please Wait...</div>
        }


        return (
            <div>
                <Link to="/Authors">All Authors</Link>

                <h1>Single Author</h1>
                <AuthorInfo username={this.state.author.username} email={this.state.author.email} phone={this.state.author.phone} />
                <AuthorAddress address={this.state.author} />
                <AuthorCompany companyName={this.state.author.companyName} slogan={this.state.author.slogan} />
            </div >

        )
    }
}

export default SingleAuthor