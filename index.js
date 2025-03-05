const AddressBook = require('./AddressBook'); // Import AddressBook class
const Contact = require('./Contact'); // Import Contact class

const myAddressBook = new AddressBook();

// Add sample contacts
try {
    const contact1 = new Contact("John", "Doe", "123 Street", "Mumbai", "Maharashtra", "400088", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    const contact2 = new Contact("Alice", "Smith", "456 Lane", "Delhi", "Delhi", "110001", "9123456789", "alice.smith@example.com");
    myAddressBook.addContact(contact2);

    const contact3 = new Contact("Bob", "Brown", "789 Road", "Mumbai", "Maharashtra", "400089", "9988776655", "bob.brown@example.com");
    myAddressBook.addContact(contact3);

    const contact4 = new Contact("Charlie", "Johnson", "101 Avenue", "Pune", "Maharashtra", "411001", "9876512345", "charlie.johnson@example.com");
    myAddressBook.addContact(contact4);

} catch (error) {
    console.error("Error:", error.message);
}

// Display all contacts
myAddressBook.displayContacts();

// Get count by city
myAddressBook.getCountByCity();

// Get count by state
myAddressBook.getCountByState();
