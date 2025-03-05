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

    // Search for persons in a particular city using filter()
    searchByCity(city) {
        let persons = this.contacts.filter(contact => contact.city === city);
        if (persons.length === 0) {
            console.log(`No contacts found in ${city}.`);
            return [];
        }

        console.log(`\nContacts in ${city}:`);
        persons.map(contact => console.log(`${contact.firstName} ${contact.lastName}, Email: ${contact.email}`));
        return persons;
    }

    // Search for persons in a particular state using filter()
    searchByState(state) {
        let persons = this.contacts.filter(contact => contact.state === state);
        if (persons.length === 0) {
            console.log(`No contacts found in ${state}.`);
            return [];
        }

        console.log(`\nContacts in ${state}:`);
        persons.map(contact => console.log(`${contact.firstName} ${contact.lastName}, Email: ${contact.email}`));
        return persons;
    }

    // Count number of persons in a city using reduce()
    countByCity(city) {
        return this.contacts.reduce((count, contact) => (contact.city === city ? count + 1 : count), 0);
    }

    // Count number of persons in a state using reduce()
    countByState(state) {
        return this.contacts.reduce((count, contact) => (contact.state === state ? count + 1 : count), 0);
    }
}

module.exports = AddressBook; // Export AddressBook class
