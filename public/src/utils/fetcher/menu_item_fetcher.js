import {Fetcher} from "./fetcher.js";
import {MenuItem} from "../../models/menu_item.js";

export default class MenuItemFetcher extends Fetcher {
    allMenuItems;


    constructor() {
        super();
        this.allMenuItems = this.baseURL + "/menuItems";
    }

    create = async function(menuItem) { //requires a MenuItem class -> ../models/menu_item.js
        try {
            const jsonObject = {
                "ID" : menuItem.itemId,
                "name" : menuItem.name,
                "description" : menuItem.description,
                "price" : menuItem.price,
                "category" : menuItem.category,
            };
            const response = await this.post(this.allMenuItems + "/create", jsonObject);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Create MenuItem Error:', error);
            throw error;
        }
    }

    getAll = async function() {
        const response = await this.fetchData(this.allMenuItems);
        console.log(`There are ${response.length} menu items`);
        if (response.length === 0) return [];
        let items = [];
        for (let i = 0; i < response.length; i++) {
            items.push(this.createMenuItemObject(response[i]));
        }
        return items;
    }

    createMenuItemObject = function(response) {
        return new MenuItem(response.id, response.name, response.description, response.price, response.category);
    }

}
export { MenuItemFetcher };