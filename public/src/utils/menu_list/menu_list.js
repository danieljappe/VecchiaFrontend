import {ElementMaker} from "../element_maker.js";

export default class MenuList {
    categoryDestination;
    menuItemDestination;
    menuCategories;
    elementMaker;
    

    constructor(menuCategories) {
        this.categoryDestination = document.getElementById('menu');
        this.menuCategories = menuCategories;
        this.elementMaker = new ElementMaker();
    }

    generateCategoryListView = () => {
        //generates a list of categories, later to be filled by each menu items
        for (let i = 0; i < this.menuCategories.length; i++) {
            //add header
            const card = this.elementMaker.getDiv('category-card');

            //get header for the card
            card.appendChild(this.elementMaker.getP('category-title', this.menuCategories[i].categoryTitle));
            card.appendChild(this.elementMaker.getDiv("", `menu-list-items-${this.menuCategories[i].categoryTitle}`));

            //add to list view
            this.categoryDestination.appendChild(card);
        }
    }

    generateMenuItemListView = () => {
        //adds all menu items to their respective categories
        for (let i = 0; i < this.menuCategories.length; i++) {
            const destination = document.getElementById(`menu-list-items-${this.menuCategories[i].categoryTitle}`);
            for (let j = 0; j < this.menuCategories[i].menuItems.length; j++) {
                //create card for under category header
                const card = this.elementMaker.getDiv('menu-item-card');

                //fill left side of card with title and description
                const head = this.elementMaker.getDiv("menu-item-card-head");
                head.appendChild(this.elementMaker.getP('menu-item-card-title', this.menuCategories[i].menuItems[j].name));
                head.appendChild(this.elementMaker.getP('menu-item-card-description', this.menuCategories[i].menuItems[j].description));
                
                //add head to card
                card.appendChild(head);

                //add price to card
                card.appendChild(this.elementMaker.getP('menu-item-card-price', `kr. ${this.menuCategories[i].menuItems[j].price}`));                
                destination.appendChild(card);
            }
        }
    }
    
} export { MenuList };