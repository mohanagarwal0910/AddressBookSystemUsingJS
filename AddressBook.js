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

        // Check for duplicates using some()
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

    // Count the number of contacts using length
    getContactCount() {
        return this.contacts.length;
    }

    // Get the number of contacts by city using reduce()
    getCountByCity() {
        let cityCount = this.contacts.reduce((count, contact) => {
            count[contact.city] = (count[contact.city] || 0) + 1;
            return count;
        }, {});

        console.log("\nNumber of Contacts by City:");
        Object.entries(cityCount).forEach(([city, count]) => {
            console.log(`${city}: ${count}`);
        });

        return cityCount;
    }

    // Get the number of contacts by state using reduce()
    getCountByState() {
        let stateCount = this.contacts.reduce((count, contact) => {
            count[contact.state] = (count[contact.state] || 0) + 1;
            return count;
        }, {});

        console.log("\nNumber of Contacts by State:");
        Object.entries(stateCount).forEach(([state, count]) => {
            console.log(`${state}: ${count}`);
        });

        return stateCount;
    }
}

module.exports = AddressBook; // Export AddressBook class
