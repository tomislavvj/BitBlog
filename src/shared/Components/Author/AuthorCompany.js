import React from "react"

const AuthorCompany = (props) => {
    return (
        <>
            <h1>Company</h1>
            <ul>
                <li>name: {props.companyName}</li>
                <li>slogan:{props.slogan}</li>
            </ul>
        </>
    )
}

export default AuthorCompany