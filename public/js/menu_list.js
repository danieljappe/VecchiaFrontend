import { MenuCategory } from "../src/models/menu_category.js";
import { MenuItemFetcher } from "../src/utils/fetcher/menu_item_fetcher.js";
import MenuList from "../src/utils/menu_list/menu_list.js";

//Menu
//get from DB
const menuItemFetcher = new MenuItemFetcher();
const allMenuItems = await menuItemFetcher.getAll();
/*const allMenuItems = [
    // Anti Pasti
    new MenuItem(1, 'Bruschetta Classica', 'Ristet brød m. tomat, mozzarella-ost, basilikum, hvidløg og rødløg', 50.0, 'Anti Pasti'),
    new MenuItem(2, 'Vitello tonnato', 'Kalvekød i skiver m. tunsause og kapers', 95.0, 'Anti Pasti'),
    new MenuItem(3, 'Antipasto degustazione alla Vecchia Maniera', 'Diverse italienske delikattesse-forretter', 110.0, 'Anti Pasti'),
    new MenuItem(4, 'Carpaccio di bresaola', 'Lufttørret oksefilét m. rucola og grana-ost', 90.0, 'Anti Pasti'),
    new MenuItem(5, 'Caprese reale', 'Skiver af bøffelmozzarella-ost, tomat, pesto, rucola og grana-ost', 80.0, 'Anti Pasti'),

    // Pasta
    new MenuItem(6, 'Lasagne alla Vecchia Maniera', 'Med kødsauce bolognese og bechamelsauce', 90.0, 'Pasta'),
    new MenuItem(7, 'Cannelloni di ricotta e spinaci', 'Pastarør m. ricotta-ost og spinat', 85.0, 'Pasta'),
    new MenuItem(8, 'Tortelli gratinati al gorgonzola', 'Tortelli m. spinat, ricotta-ost, gratineret m. gorgonzola', 90.0, 'Pasta'),
 
    // Pizza
    new MenuItem(9, 'Margherita', 'Tomat, mozzarella-ost og basilikum', 80.0, 'Pizze'),
    new MenuItem(10, 'Capricciosa', 'Tomat, mozzarella-ost, champignon, artiskok og skinke', 90.0, 'Pizze'),
    new MenuItem(11, 'Quattro stagioni', 'Tomat, mozzarella-ost, champignon, skinke, artiskok, oliven og rejer', 90.0, 'Pizze'),
    new MenuItem(12, 'Bolognese', 'Tomat, mozzarella-ost og kødsauce', 85.0, 'Pizze'),
    new MenuItem(13, 'Pesce', 'Tomat, mozzarella-ost, tun og rejer', 90.0, 'Pizze'),
    new MenuItem(14, 'Peperoni', 'Tomat, mozzarella-ost, peperoni, bacon, hvidløg, chili', 90.0, 'Pizze'),
    new MenuItem(15, 'Tartufata', 'Mozzarella-ost, KarlJohan svampe, cherrytomat, rucola, grana-ost og trøffel creme', 105.0, 'Pizze'),
    new MenuItem(16, 'Vecchia Maniera', 'Mozzarella-ost, rødløg, kartofler og rosemarin', 85.0, 'Pizze'),
    new MenuItem(17, 'Salsiccia', 'Tomat, mozzarella-ost, salsiccia, mascarpone og champignon', 90.0, 'Pizze'),
    new MenuItem(18, 'Gorgonzola', 'Tomat, mozzarella-ost, luft-tørret-skinke og gorgonzola', 95.0, 'Pizze'),
    new MenuItem(19, 'Vegetariana', 'Tomat, mozzarella-ost og frisk-grillet grøntsager', 90.0, 'Pizze'),
    new MenuItem(20, 'Pollo', 'Tomat, mozzarella-ost, champignon og kylling', 90.0, 'Pizze'),
    new MenuItem(21, 'Bresaola', 'Tomat, mozzarella-ost, bresaola, cherrytomat, rucola og grana-ost', 100.0, 'Pizze'),
    new MenuItem(22, 'Carni', 'Tomat, mozzarella-ost, kødstrimler, paprika og løg', 95.0, 'Pizze'),
    new MenuItem(23, 'Caprese', 'Tomat, bøffel mozzarella-ost, friske tomater, mozzarella-ost og pesto', 90.0, 'Pizze'),
    new MenuItem(24, 'Mascarpone Cotto', 'Tomat, mozzarella-ost, mascarpone, kartoffelskiver og cotto-skinke', 95.0, 'Pizze'),
    new MenuItem(25, 'Italia salami', 'Tomat, mozzarella-ost, stærk italiensk salami', 90.0, 'Pizze'),

    // Sandwich
    new MenuItem(26, 'Sandwich med luft-tørret skinke', 'Altid nybagt ciabatta brød, Husets dressing eller pesto, samt frisk salat', 65.0, 'Sandwich'),
    new MenuItem(27, 'Sandwich med mortadella', 'Altid nybagt ciabatta brød, Husets dressing eller pesto, samt frisk salat', 65.0, 'Sandwich'),
    new MenuItem(28, 'Sandwich med bresaola', 'Lufttørret oksefliet', 65.0, 'Sandwich'),
    new MenuItem(29, 'Sandwich med kalvekød', 'Plus tunsauce og kapers', 65.0, 'Sandwich'),
    new MenuItem(30, 'Sandwich med kylling', 'Altid nybagt ciabatta brød, Husets dressing eller pesto, samt frisk salat', 65.0, 'Sandwich'),
    new MenuItem(31, 'Sandwich med bøffel-mozzarella-ost og pesto', 'Altid nybagt ciabatta brød, Husets dressing eller pesto, samt frisk salat', 65.0, 'Sandwich'),
  
    // Til Dessert
    new MenuItem(32, 'Tiramisu Vecchia Maniera', 'Veneziansk kage med m. mascarponecreme', 50.0, 'Til Dessert'),
    new MenuItem(33, 'Originale Italienske Is', 'Mange varianter', 50.0, 'Til Dessert')
];*/
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

