import React from "react"

const AuthorAddress = (props) => {
    return (
        <>
            <div>
                <h1>Address</h1>
                <ul>
                    <li>street:{props.address.street}</li>
                    <li>city: {props.address.city}</li>
                    <li>zipcode:{props.address.zipcode} </li>

                </ul>
                <iframe
                    width="50%"
                    height="50%"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"

                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://maps.google.com/maps?q=${props.address.lat},${props.address.lng}&z=15&output=embed`}
                />

            </div>
        </>
    )
}

export default AuthorAddress