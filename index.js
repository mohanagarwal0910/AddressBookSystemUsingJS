const AddressBook = require('./AddressBook'); // Import AddressBook class
const Contact = require('./Contact'); // Import Contact class

const myAddressBook = new AddressBook();

// Add sample contacts
try {
    const contact1 = new Contact("John", "Doe", "123 Street", "Mumbai", "Maharashtra", "400088", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    const contact2 = new Contact("Alice", "Smith", "456 Lane", "Delhi", "Delhi", "110001", "9123456789", "alice.smith@example.com");
    myAddressBook.addContact(contact2);

    // Attempt to add a duplicate contact
    const duplicateContact = new Contact("John", "Doe", "789 Avenue", "Pune", "Maharashtra", "411001", "9876541234", "john.duplicate@example.com");
    myAddressBook.addContact(duplicateContact); // This should be rejected

} catch (error) {
    console.error("Error:", error.message);
}

// Display all contacts
myAddressBook.displayContacts();

// Get the number of contacts using reduce()
console.log(`\nTotal Contacts: ${myAddressBook.getContactCount()}`);
