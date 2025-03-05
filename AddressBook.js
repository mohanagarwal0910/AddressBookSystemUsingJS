const Contact = require('./Contact'); // Import Contact class

class AddressBook {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Add a new contact after validation
    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } else {
            console.log("Invalid contact data.");
        }
    }

    // Display all contacts
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
            return;
        }
        console.log("\nAddress Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName},${contact.address}, ${contact.city}, ${contact.state}, ${contact.email}`);
        });
    }

    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }
}

module.exports = AddressBook; // Export AddressBook class
