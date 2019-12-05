import React from "react"

const AuthorInfo = (props) => {
    return (
        <>
            <ul class="collection">
                <li class="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" class="circle" />
                    <span class="title">username:{props.username}</span>
                    <p>email:{props.email}
                    </p>
                    <br />
                    <p>
                        phone:{props.phone}
                    </p>
                    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
                </li>
            </ul>
        </>
    )
}

export default AuthorInfo 