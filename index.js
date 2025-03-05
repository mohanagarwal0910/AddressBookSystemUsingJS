const AddressBook = require('./AddressBook');
const Contact = require('./Contact');

const myAddressBook = new AddressBook();

// Adding sample contacts
myAddressBook.addContact(new Contact("Alice", "Smith", "123 Street", "New York", "NY", "10001", "1234567890", "alice@example.com"));
myAddressBook.addContact(new Contact("Bob", "Brown", "456 Avenue", "Los Angeles", "CA", "90001", "9876543210", "bob@example.com"));
myAddressBook.addContact(new Contact("Charlie", "Johnson", "789 Lane", "Chicago", "IL", "60601", "5678901234", "charlie@example.com"));
myAddressBook.addContact(new Contact("David", "Adams", "321 Blvd", "Houston", "TX", "77001", "3456789012", "david@example.com"));

// Sort and display results
myAddressBook.sortByCity();   // Sort by City
myAddressBook.sortByState();  // Sort by State
myAddressBook.sortByZip();    // Sort by Zip
