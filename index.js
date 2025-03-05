const AddressBook = require('./AddressBook'); // Import AddressBook class
const Contact = require('./Contact'); // Import Contact class

const myAddressBook = new AddressBook();

// Add sample contacts
try {
    const contact1 = new Contact("John", "Doe", "123 Street", "Mumbai", "Maharashtra", "400088", "9876543210", "john.doe@example.com");
    myAddressBook.addContact(contact1);

    const contact2 = new Contact("Alice", "Smith", "456 Lane", "Delhi", "Delhi", "110001", "9123456789", "alice.smith@example.com");
    myAddressBook.addContact(contact2);

} catch (error) {
    console.error("Error:", error.message);
}

// Display all contacts
myAddressBook.displayContacts();

// Edit an existing contact
console.log("\nEditing John's contact...");
myAddressBook.editContact("John", "Doe", { 
    address: "999 New Street",
    city: "Pune",
    phone: "9998887776"
});

// Display contacts after editing
myAddressBook.displayContacts();
