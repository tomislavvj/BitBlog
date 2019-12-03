import React from "react"
import { Link } from "react-router-dom"



const Authors = (props) => {
    return (
        <ul>
            <li>
                <Link to="/SingleAuthor">NameSurname(numOfPosts)</Link>
            </li>
        </ul>
    )
}

export default Authors