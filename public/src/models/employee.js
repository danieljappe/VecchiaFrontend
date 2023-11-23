export default class Employee {
    id;
    firstName;
    lastName;
    email;
    phone;
    isAdmin;
    
    // Contructor
    constructor(
        id,
        firstName,
        lastName,
        email,
        phone,
        isAdmin,
    ) {
        //direct class variables
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.isAdmin = isAdmin;
    } 
} export { Employee as Employee };