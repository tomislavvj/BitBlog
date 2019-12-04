class Author {
    constructor(authorData) {
        this.id = authorData.id
        this.name = authorData.name
        this.username = authorData.username
        this.email = authorData.email
        this.street = authorData.address.street
        this.city = authorData.address.city
        this.zipcode = authorData.address.zipcode

    }
}
export default Author