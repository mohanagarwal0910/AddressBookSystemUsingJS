const Contact = require('./Contact'); // Import Contact class

class AddressBook {
    constructor() {
        this.contacts = []; // Array to store contacts
    }

    // Add a new contact after checking for duplicates
    addContact(contact) {
        if (!(contact instanceof Contact)) {
            console.log("Invalid contact data.");
            return;
        }

        // Check for duplicates using filter()
        let isDuplicate = this.contacts
            .filter(existingContact => 
                existingContact.firstName === contact.firstName &&
                existingContact.lastName === contact.lastName
            ).length > 0;

        if (isDuplicate) {
            console.log(`Error: Contact with name ${contact.firstName} ${contact.lastName} already exists.`);
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    // Display all contacts
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
            return;
        }
        console.log("\nAddress Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName}, ${contact.city}, ${contact.state}, ${contact.email}`);
        });
    }

    // Count the number of contacts using reduce()
    getContactCount() {
        return this.contacts.reduce((count) => count + 1, 0);
    }
}

module.exports = AddressBook; // Export AddressBook class
