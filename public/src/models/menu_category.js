export default class MenuCategory {
    menuItems;
    categoryTitle;
    
    // Contructor
    constructor(
        menuItems,
        categoryTitle,
    ) {
        //direct class variables
        this.menuItems = menuItems;
        this.categoryTitle = categoryTitle;
    } 

    //Makes a button
    add = function(menuItem) {
        this.menuItems.push(menuItem);
    }

    toString() {
        return `${this.categoryTitle}, ${this.menuItems.length}`;
    }
}
export { MenuCategory as MenuCategory };