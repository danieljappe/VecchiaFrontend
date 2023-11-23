import Fetcher from "./fetcher";
import Order from "../../models/menu_item";

export default class OrderFetcher extends Fetcher {
    allOrders;


    constructor() {
        super();
        this.allOrders = this.baseURL + "/orders";
    }

    create = async function(order) { //requires a Order class -> ../models/menu_item.js
        try {
            const jsonObject = {
                "itemID" : order.orderId,
                "name" : order.name,
                "description" : order.description,
                "price" : order.price,
                "phone" : order.phone,
                "email" : order.email,
            };
            const response = await this.post(this.allOrders + "/create", jsonObject);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Create Order Error:', error);
            throw error;
        }
    }

    getAll = async function() {
        const response = await this.fetchData(this.allOrders);
        console.log(`There are ${response.length} orders`);
        if (response.length === 0) return [];
        let items = [];
        for (let i = 0; i < response.length; i++) {
            items.push(this.createOrderObject(response[i]));
        }
        return items;
    }

    createOrderObject = function(response) {
        return new Order(
            response.itemID,
            response.name,
            response.description,
            response.price,
            response.phone,
            response.email,
        );
    }

}
export { OrderFetcher };