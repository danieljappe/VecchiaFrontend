document.addEventListener("DOMContentLoaded", function() {
    // Add a class to trigger the transition effect after the page is loaded
    document.querySelector(".section1").classList.add("loaded");
    const scrollButtons = document.querySelectorAll('.scroll-button');

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
});

slidePics = [
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/pizza-6_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4985_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_2008_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4976_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5006_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4987_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4989_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4992_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_4999_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5014_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5031_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5036_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5037_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5046_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5047_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5054_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5084_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/img_5101_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/p1100005_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/p1100206_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/pizza-2_large.jpg",
    "https://www.vecchia.dk/files/system/imagegallery/galleriet/pizza-4_large.jpg"
]

function slideShow() {
    var slide = document.getElementById("slide");
    var i = 0;
    setInterval(function() {
        slide.src = slidePics[i];
        i = i + 1;
        if (i == slidePics.length) {
            i = 0;
        }
    }, 3000);
}

slideShow();

const antiPasti = [
    {name: "Bruchetta Classica", description: "Ristet brød m. tomat, mozzarella-ost, basilikum, hvidløg og rødløg", price: 50},
    {name: "Vitello tonnato", description: "Kalvekød i skiver m. tunsause og kapers", price: 95},
    {name: "Antipasto degustazione alla Vecchia Maniera", description: "Diverse italienske delikattesse-forretter", price: 110},
    {name: "Carpaccio di bresaola", description: "Lufttørret oksefilét m. rucola og grana-ost", price: 90},
    {name: "Caprese reale", description: "Skiver af bøffelmozzarella-ost, tomat, pesto, rucola og grana-ost", price: 80}
]

const pasta = [
    {name: "Lasagne alla Vecchia Maniera", description: "Med kødsause bolognese og bechamelsause", price: 90},
    {name: "Cannelloni di ricotta e spinaci", description: "Pastarør m. ricotta-ost og spinat", price: 85},
    {name: "Tortelli gratinati al gorgonzola", description: "Tortelli m. spinat, ricotta-ost, gratineret m. gorgonzola", price: 90},
    {name: "Dagens Pasta Ret?", description: "", price: 85}
]

const pizze = [
    {name: "Pizza Margherita", description: "Tomat, mozzarella-ost, basilikum", price: 80},
    {name: "Pizza Capricciosa", description: "Tomat, mozzarella-ost, champignon, artiskok og skinke", price: 90},
    {name: "Pizza Quattro stagioni", description: "Tomat, mozzarella-ost, champignon, skinke, artiskok, oliven og rejer", price: 90},
    {name: "Pizza Bolognese", description: "Tomat, mozzarella-ost, og kødsauce", price: 85},
    {name: "Pizza Pesce", description: "Tomat, mozzarella-ost, tun og rejer", price: 90},
    {name: "Pizza Peperoni", description: "Tomat, mozzarella-ost, peperoni, bacon, hvidløg, chili", price: 90},
    {name: "Pizza Tartufata", description: "Mozzarella-ost, KarlJohan svampe, cherrytomat, rucola, grana-ost og trøffel creme", price: 105},
    {name: "Pizza Vecchia Maniera", description: "Mozzarella-ost, rødløg, kartofler og rosemarin", price: 85},
    {name: "Pizza Salsiccia", description: "Tomat, mozzarella-ost, salsiccia, mascarpone og champignon", price: 90},
    {name: "Pizza Gorgonzola", description: "Tomat, mozzarella-ost, luft-tørret-skinke og gorgonzola", price: 95},
    {name: "Pizza Vegetariana", description: "Tomat, mozzarella-ost og frisk-grillet grøntsager", price: 90},
    {name: "Pizza Pollo", description: "Tomat, mozzarella-ost, champignon og kylling", price: 90},
    {name: "Pizza Bresaola", description: "Tomat, mozzarella-ost, bresaola, cherrytomat, rucola og grana-ost", price: 100},
    {name: "Pizza Carni", description: "Tomat, mozzarella-ost, kødstrimler, paprika og løg", price: 95},
    {name: "Pizza Caprese", description: "Tomat, bøffel mozzarella-ost, friske tomater, mozzarella-ost og pesto", price: 90},
    {name: "Pizza Mascarpone Cotto", description: "Tomat, mozzarella-ost, mascarpone, kartoffelskiver og cotto-skinke", price: 95},
    {name: "Pizza Italia Salami", description: "Tomat, mozzarella-ost, stærk italiensk salami", price: 90}
]

const sandwich = [
    {name: "Sandwich med luft-tørret skinke", price: 65},
    {name: "Sandwich med mortadella", price: 65},
    {name: "Sandwich med bresaola", description: "Lufttørret oksefilet", price: 65},
    {name: "Sandwich med kalvekød", description: "Plus tunsauce og kapers", price: 65},
    {name: "Sandwich med kylling", price: 65},
    {name: "Sandwich med bøffel-mozzarella-ost og pesto", price: 65}
]

const dessert = [
    {name: "Tiramisu Vecchia Maniera", description: "Veneziansk kage med mascarponecreme", price: 50},
    {name: "Originale Italienske Is", description: "Mange varianter", price: 50}
]

// Function to create menu items
function createMenuItems(menuData, containerId) {
    const menuContainer = document.getElementById(containerId);

    menuData.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");

        const leftContent = document.createElement("div");
        leftContent.classList.add("menuItem-left");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        leftContent.appendChild(itemName);

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description || '';
        leftContent.appendChild(itemDescription);

        menuItem.appendChild(leftContent);

        const price = document.createElement("div");
        price.classList.add("menuItem-price");
        const priceText = document.createElement("h3");
        priceText.textContent = `${item.price},-`;
        price.appendChild(priceText);
        menuItem.appendChild(price);

        menuContainer.appendChild(menuItem);
    });
}

// Call the function to populate menu items for each category
createMenuItems(antiPasti, "antiPastiMenuItems");
createMenuItems(pasta, "pastaMenuItems");
createMenuItems(pizze, "pizzeMenuItems");
createMenuItems(sandwich, "sandwichMenuItems");
createMenuItems(dessert, "dessertMenuItems");


