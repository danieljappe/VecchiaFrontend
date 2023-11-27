import {ElementMaker} from "../element_maker.js";

export default class MenuList {
    destination;
    menuCategories;
    elementMaker;
    

    constructor(menuCategories) {
        this.destination = document.getElementById('menu');
        this.menuCategories = menuCategories;
        this.elementMaker = new ElementMaker();
    }

    generateCategoryListView = () => {
        //generates a list of categories, later to be filled by each menu items
        for (let i = 0; i < this.menuCategories.length; i++) {
            //add header
            const card = this.elementMaker.getDiv('card');

            //get header for the card
            card.appendChild(this.elementMaker.getP('category-title', this.menuCategories[i].categoryTitle));
            card.appendChild(this.elementMaker.getDiv("category-items"));
    
            //add to list view
            this.destination.appendChild(card);
        }
    }

    generateMenuItemListView = () => {
        //adds all menu items to their respective categories
        for (let i = 0; i < this.menuCategory.menuItems.length; i++) {
            //add card under category header

        }
    }
    
} export { MenuList };