import { MenuCategory } from "./models/menu_category.js";
import { MenuItemFetcher } from "./utils/fetcher/menu_item_fetcher.js";
let lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let navbar = document.getElementById("mainNavbar");

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-80px";  // Adjust the value based on the height of your navbar
        } else {
            // Scrolling up
            navbar.style.top = "0";
        }

        lastScrollTop = scrollTop;
    });

//Menu
//get from DB
const menuItemFetcher = new MenuItemFetcher();
const allMenuItems = await menuItemFetcher.getAll();
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

//make 
