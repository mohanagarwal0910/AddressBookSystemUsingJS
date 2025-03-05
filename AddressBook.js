const Contact = require('./Contact'); // Import Contact class

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    // Add a contact after checking for duplicates
    addContact(contact) {
        if (!(contact instanceof Contact)) {
            console.log("Invalid contact data.");
            return;
        }

        let isDuplicate = this.contacts.some(existingContact => 
            existingContact.firstName === contact.firstName &&
            existingContact.lastName === contact.lastName
        );

        if (isDuplicate) {
            console.log(`Error: Contact with name ${contact.firstName} ${contact.lastName} already exists.`);
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    // Sort by City
    sortByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
        console.log("\nContacts sorted by City:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }

    // Sort by State
    sortByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
        console.log("\nContacts sorted by State:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }

    // Sort by Zip
    sortByZip() {
        this.contacts.sort((a, b) => a.zip.localeCompare(b.zip)); // Sorting numerically as strings
        console.log("\nContacts sorted by Zip Code:");
        this.contacts.forEach(contact => console.log(contact.toString()));
    }
}

module.exports = AddressBook;
