import React from "react"
import { Link } from "react-router-dom"
import { fetchAuthors } from "../../services/AuthorServices"


class Authors extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            authors: []

        }
    }

    componentDidMount() {
        fetchAuthors()
            .then(autori => {
                this.setState({ authors: autori })
                console.log(autori);
            })

    }
    render() {
        const Authors = this.state.authors.map(authors => (
            <li>

                {/* <h3 className="authorTitle"><Link to="/singleAuthor">{authors.name}</Link></h3>  */}
                <h3><Link to={`/author/${authors.id}`}>{authors.name}</Link></h3>

            </li>

        ))

        return (
            <div className="mainDivAuthors">
                <ul className="ulAuthors">
                    {Authors}
                </ul>
            </div>
        )
    }

}

export default Authors 