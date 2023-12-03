import { MenuCategory } from "../src/models/menu_category.js";
import MenuItem from "../src/models/menu_item.js";
import { MenuItemFetcher } from "../src/utils/fetcher/menu_item_fetcher.js";
import MenuList from "../src/utils/menu_list/menu_list.js";

//Menu
//get from DB
const menuItemFetcher = new MenuItemFetcher();
//const allMenuItems = await menuItemFetcher.getAll();
const allMenuItems = [
    new MenuItem(1, "Salat", "Tomat, Kebab, Dressing", 89.95, "Pizze"),
    new MenuItem(1, "Salat", "Tomat, Kebab, Dressing", 39.95, "Panini"),
    new MenuItem(1, "Salat", "Tomat, Kebab, Dressing", 49.95, "Pizze"),
];
console.log(allMenuItems);

//sort
const menuCategories = [];
for (let i = 0; i < allMenuItems.length; i++) {
    let categoryExists = false;
    const categoryTitle = allMenuItems[i].category;
    for (let j = 0; j < menuCategories.length; j++) {
        if (menuCategories[j].categoryTitle == categoryTitle) {
            menuCategories[j].add(allMenuItems[i]);
            categoryExists = true;
            break;
        }
    }
    if (!categoryExists) {
        menuCategories.push(new MenuCategory([allMenuItems[i]], categoryTitle));
    }
}
console.log(menuCategories);

//add to DOM 
const menuList = new MenuList(menuCategories);
menuList.generateCategoryListView();
menuList.generateMenuItemListView();

//if print page, then print after
if (window.location.pathname.includes("menu_list_print.html")) {
    setTimeout(
        function() {
            window.print();
            window.history.back();
        }, 
        300,
    );
}