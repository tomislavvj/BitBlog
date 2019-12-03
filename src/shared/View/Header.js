import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {
    return (
        <nav>
            <div class="nav-wrapper">
                <Link to="/home" class="brand-logo">BIT BLOG</Link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/authors">Authors</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header