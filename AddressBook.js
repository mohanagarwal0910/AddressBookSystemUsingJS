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

    // View persons by city without using reduce()
    viewByCity() {
        let cityGroups = {}; // Object to store contacts by city

        this.contacts.forEach(contact => {
            if (!cityGroups[contact.city]) {
                cityGroups[contact.city] = [];
            }
            cityGroups[contact.city].push(`${contact.firstName} ${contact.lastName}`);
        });

        console.log("\nPersons grouped by City:");
        Object.keys(cityGroups).forEach(city => {
            console.log(`${city}: ${cityGroups[city].join(", ")}`);
        });

        return cityGroups;
    }

    // View persons by state without using reduce()
    viewByState() {
        let stateGroups = {}; // Object to store contacts by state

        this.contacts.forEach(contact => {
            if (!stateGroups[contact.state]) {
                stateGroups[contact.state] = [];
            }
            stateGroups[contact.state].push(`${contact.firstName} ${contact.lastName}`);
        });

        console.log("\nPersons grouped by State:");
        Object.keys(stateGroups).forEach(state => {
            console.log(`${state}: ${stateGroups[state].join(", ")}`);
        });

        return stateGroups;
    }
}

module.exports = AddressBook; // Export AddressBook class
