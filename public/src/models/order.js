export default class Order {
    orderId;
    name;
    description;
    price;
    phone;
    
    // Contructor
    constructor(
        orderId,
        name,
        description,
        price,
        phone,
    ) {
        //direct class variables
        this.orderId = orderId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.phone = phone;
    } 
} export { Order as Order };