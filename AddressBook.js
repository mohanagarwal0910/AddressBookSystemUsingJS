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

    // Find Contact by Name
    findContact(firstName, lastName) {
        return this.contacts.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }

    // Edit Contact Details
    editContact(firstName, lastName, updatedDetails) {
        let contact = this.findContact(firstName, lastName);
        if (!contact) {
            console.log(`Contact with name ${firstName} ${lastName} not found.`);
            return;
        }

        // Update details based on provided fields
        for (let key in updatedDetails) {
            if (contact[key] !== undefined) {
                contact[key] = updatedDetails[key];
            }
        }

        console.log(`Contact ${firstName} ${lastName} updated successfully.`);
    }

    // Delete Contact by Name
    deleteContact(firstName, lastName) {
        const index = this.contacts.findIndex(contact => contact.firstName === firstName && contact.lastName === lastName);
        
        if (index === -1) {
            console.log(`Contact with name ${firstName} ${lastName} not found.`);
            return;
        }

        this.contacts.splice(index, 1);
        console.log(`Contact ${firstName} ${lastName} deleted successfully.`);
    }
}

module.exports = AddressBook; // Export AddressBook class
