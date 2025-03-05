class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    // Override toString() method for printing
    toString() {
        return `${this.firstName} ${this.lastName} | ${this.address}, ${this.city}, ${this.state} - ${this.zip} | ${this.phone} | ${this.email}`;
    }
}

module.exports = Contact;
