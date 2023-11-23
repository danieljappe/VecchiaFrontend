export default class MenuItem {
    itemId;
    name;
    description;
    price;
    category;
    
    // Contructor
    constructor(
        itemId,
        name,
        description,
        price,
        category,
    ) {
        //direct class variables
        this.itemId = itemId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
    } 
}
export { MenuItem as MenuItem };