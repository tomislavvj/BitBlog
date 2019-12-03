import React from 'react'
import AuthorInfo from "./AuthorInfo"
import AuthorAddress from "./AuthorAddress"
import AuthorCompany from "./AuthorCompany"
import { Link } from "react-router-dom"



const SingleAuthor = (props) => {
    return (
        <>
            <Link to="/Authors">All Authors</Link>

            <h1>Single Author</h1>
            <AuthorInfo />
            <AuthorAddress />
            <AuthorCompany />
        </>

    )
}

export default SingleAuthor