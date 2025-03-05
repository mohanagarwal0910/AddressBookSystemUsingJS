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
}

const newContact = new Contact(
    "John", "Doble", "123 Street", "New York", "NY", "10001",
    "9876543210", "john.doble@example.com"
);

console.log("New Contact Created:", newContact);

