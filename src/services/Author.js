class Author {
    constructor(authorData) {
        console.log(authorData);

        this.id = authorData.id
        this.name = authorData.name
        this.username = authorData.username
        this.email = authorData.email
        this.street = authorData.address.street
        this.city = authorData.address.city
        this.zipcode = authorData.address.zipcode
        this.phone = authorData.phone
        this.companyName = authorData.company.name
        this.slogan = authorData.company.catchPhrase
        this.lng = authorData.address.geo.lng
        this.lat = authorData.address.geo.lat
    }
}
export default Author