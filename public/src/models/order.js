export default class Order {
    orderId;
    name;
    description;
    price;
    phone;
    email;

    // Contructor
    constructor(
        orderId,
        name,
        description,
        price,
        phone,
        email,
    ) {
        //direct class variables
        this.orderId = orderId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.phone = phone;
        this.email = email;
    }
}
export { Order as Order };