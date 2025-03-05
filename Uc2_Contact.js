class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        // Validate each field before assigning values
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateMinLength(address, "Address", 4);
        this.city = this.validateMinLength(city, "City", 4);
        this.state = this.validateMinLength(state, "State", 4);
        this.zip = this.validateZip(zip);
        this.phone = this.validatePhone(phone);
        this.email = this.validateEmail(email);
    }

    // Validate Name (First/Last) - Capital letter, min 3 chars
    validateName(name, fieldName) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) {
            throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        }
        return name;
    }

    // Validate Address, City, State - Min 4 characters
    validateMinLength(value, fieldName, minLength) {
        if (value.length < minLength) {
            throw new Error(`${fieldName} must be at least ${minLength} characters long.`);
        }
        return value;
    }

    // Validate ZIP Code (6-digit, space allowed)
    validateZip(zip) {
        const zipRegex = /^[0-9]{3}\s?[0-9]{3}$/;
        if (!zipRegex.test(zip)) {
            throw new Error("ZIP Code must be a valid 6-digit number (e.g., 400088 or 400 088).");
        }
        return zip;
    }

    // Validate Phone Number (10-digit)
    validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            throw new Error("Phone Number must be a 10-digit numeric value.");
        }
        return phone;
    }

    // Validate Email
    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?$/;
        if (!emailRegex.test(email)) {
            throw new Error("Invalid Email format.");
        }
        return email;
    }
}

// Example Usage
try {
    const contact1 = new Contact("John", "Doe", "123 Street", "Mumbai", "Maharashtra", "400088", "9876543210", "john.doe@example.com");
    console.log("Contact Added Successfully:", contact1);
} catch (error) {
    console.error("Error:", error.message);
}

try {
    const contact2 = new Contact("jo", "Smith", "Main St", "NY", "NY", "4000", "12345", "invalidemail@com");
} catch (error) {
    console.error("Error:", error.message); // Will throw multiple errors for invalid fields
}
