async function fetchMenuItems() {
    const fetchMenuItemsUrl = "https://vecchiabackend.azurewebsites.net/menuItems";
    
    try {
        const response = await fetch(fetchMenuItemsUrl);
        const menuItems = await response.json();

        // Update global variables
        allMenuItems = menuItems;
        allCategories = [...new Set(menuItems.map(item => item.category))]; // Get unique categories

        // Update the HTML with the fetched menu items
        document.getElementById("loading-gif").style.display = "none";
        const menuItemsContainer = document.getElementById('menuItemsContainer');
        menuItemsContainer.innerHTML = '';

        const menuList = document.createElement('ul');
        menuList.className = 'menu-list';

        menuItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'menu-item-container'; // Add a class for the container box
        
            listItem.innerHTML = `
                <div class="card">
                    <!-- <img src="item-image.jpg" class="card-img-top" alt="Item Image"> -->
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><strong>Price:</strong> ${item.price.toFixed(2)}kr.-</p>
                        <p class="card-text"><strong>Category:</strong> ${item.category}</p>
                        <div class="btn-group" role="group">
                            <button class="btn btn-warning" onclick="editItem(${item.id}, '${item.name}', '${item.description}', ${item.price}, '${item.category}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
                        </div>
                    </div>
                </div>
            `;
        
            menuList.appendChild(listItem);
        });

        menuItemsContainer.appendChild(menuList);

        // Update the sorting dropdown options and selected category span
        updateCategoryDropdown();

        // Set the selected category span explicitly for the "All Categories" case
        const selectedCategorySpan = document.getElementById('selectedCategory');
        selectedCategorySpan.textContent = 'All Categories';

        // Display the menu section
        document.getElementById('menu').style.display = 'flex';

        // Clear the loading state
        loadingContainer.innerHTML = '';
    } catch (error) {
        console.error('Error fetching menu items:', error);

        // Display error state
        const errorContainer = document.getElementById('errorContainer');
        errorContainer.textContent = 'Error fetching menu items. Please try again later.';

        // Clear the loading state
        loadingContainer.innerHTML = '';
    }
}




// Function to update the sorting dropdown options
function updateCategoryDropdown() {
    const categorySortDropdown = document.getElementById('categorySort');
    categorySortDropdown.innerHTML = '<option value="all">All Categories</option>';

    allCategories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        categorySortDropdown.add(option);
    });
}

// Function to sort menu items based on selected category
function sortMenuItems() {
    const categorySortDropdown = document.getElementById('categorySort');
    const selectedCategory = categorySortDropdown.value;

    // Set the selected category in the span element
    const selectedCategorySpan = document.getElementById('selectedCategory');
    
    if (selectedCategory === 'all') {
        selectedCategorySpan.textContent = 'All Categories';
    } else {
        selectedCategorySpan.textContent = `${selectedCategory}`;
    }

    const filteredMenuItems = selectedCategory === 'all' ?
        allMenuItems :
        allMenuItems.filter(item => item.category === selectedCategory);

    // Update the HTML with the sorted menu items
    const menuItemsContainer = document.getElementById('menuItemsContainer');
    menuItemsContainer.innerHTML = '';

    filteredMenuItems.forEach(item => {
        const listItem = document.createElement('li');
            listItem.className = 'menu-item-container'; // Add a class for the container box
        
            listItem.innerHTML = `
                <div class="card">
                    <!-- <img src="item-image.jpg" class="card-img-top" alt="Item Image"> -->
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text"><strong>Price:</strong> ${item.price.toFixed(2)}kr.-</p>
                        <p class="card-text"><strong>Category:</strong> ${item.category}</p>
                        <div class="btn-group" role="group">
                            <button class="btn btn-warning" onclick="editItem(${item.id}, '${item.name}', '${item.description}', ${item.price}, '${item.category}')">Edit</button>
                            <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
                        </div>
                    </div>
                </div>
            `;
        
            menuItemsContainer.appendChild(listItem);
        });
}


// Ensure the toggle button is initially hidden
document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn = document.getElementById("toggle-btn");
    toggleBtn.style.opacity = 0;
    
});

// Fetch menu items when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Handle delete button click
    document.getElementById('menuItemsContainer').addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-danger')) {
            const itemId = event.target.closest('.card').dataset.itemId;
            deleteItem(itemId);
        }
    });

    // Fetch menu items only if the initial section is "menu"
    const employeeData = JSON.parse(window.sessionStorage.getItem('employee'));
    console.log('Employee Data in employee.html:', employeeData);

    const sectionElement = document.querySelector('.employee-info');

    if (employeeData) {
        sectionElement.innerHTML = `
        <h1>Logged in as: ${employeeData.firstName} ${employeeData.lastName}</h1>
        <p><strong>Employee ID:</strong> ${employeeData.employeeID}</p>
        <p><strong>Is admin:</strong> ${employeeData.admin ? 'Yes' : 'No'}</p>
        <p><strong>Email:</strong> ${employeeData.email}</p>
        <p><strong>Phone:</strong> ${employeeData.phone}</p>
        `;
    } else {
        // Handle the case when employeeData is null or undefined
        sectionElement.innerHTML = `<h1>No employee data found!</h1>`;
    }
        // Ensure the toggle button is initially hidden
        var toggleBtn = document.getElementById("toggle-btn");
        toggleBtn.style.opacity = 0;

        // Fetch menu items only if the initial section is "menu"
        if (window.location.hash === "#menu") {
            fetchMenuItems();
        }

        // Handle form submission
        document.getElementById('addItemForm').addEventListener('submit', function (event) {
            event.preventDefault();
        
            const itemName = document.getElementById('itemName').value;
            const itemDescription = document.getElementById('itemDescription').value;
            const itemPrice = document.getElementById('itemPrice').value;
            const itemCategory = document.getElementById('itemCategory').value;

            const newItem = {
                name: itemName,
                description: itemDescription,
                price: parseFloat(itemPrice),
                category: itemCategory
            };

            fetch('https://vecchiabackend.azurewebsites.net/menuItems/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })
            .then(response => response.json())
            .then(createdItem => {
                console.log('Item created:', createdItem);

                // update the menu items
                fetchMenuItems();

                // Close the modal
                $('#addItemModal').modal('hide');
            })
            .catch(error => {
                console.error('Error adding item:', error);
            });
        });

    });

function editItem(itemId, itemName, itemDescription, itemPrice, itemCategory) {
    console.log('Received itemId:', itemId);
    console.log('Received itemName:', itemName);
    // Set values in the edit item modal
    document.getElementById('editItemId').value = itemId;
    document.getElementById('editItemName').value = itemName;
    document.getElementById('editItemDescription').value = itemDescription;
    document.getElementById('editItemPrice').value = itemPrice;
    document.getElementById('editItemCategory').value = itemCategory;

    // Show the edit item modal
    $('#editItemModal').modal('show');
}

// Handle edit item form submission
document.getElementById('editItemForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const itemId = document.getElementById('editItemId').value;
    const itemName = document.getElementById('editItemName').value;
    const itemDescription = document.getElementById('editItemDescription').value;
    const itemPrice = parseFloat(document.getElementById('editItemPrice').value);
    const itemCategory = document.getElementById('editItemCategory').value;

    // Create a new menu item object
    const editedItem = {
        itemID: itemId,
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        category: itemCategory
    };

    // Make a PUT request to update the item
    let editUrl = 'https://vecchiabackend.azurewebsites.net/menuItems/update/' + itemId;
    fetch(editUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedItem)
    })
    .then(response => {
        console.log('Response:', response);
        return response.json();
    })
    .then(updatedItem => {
        console.log('Item updated:', updatedItem);

        // Optionally update the menu items
        fetchMenuItems();

        // Close the modal
        $('#editItemModal').modal('hide');
    })
    .catch(error => {
        console.error('Error updating item:', error);
    })
});


// DELETE
async function deleteItem(itemId) {
    try {
        const deleteUrl = `https://vecchiabackend.azurewebsites.net/menuItems/delete/${itemId}`;
        const response = await fetch(deleteUrl, {
            method: 'DELETE',
        });

        if (response.ok) {
            console.log(`Item with ID ${itemId} deleted successfully.`);
            // Optionally update the menu items
            fetchMenuItems();
        } else {
            console.error(`Error deleting item with ID ${itemId}.`);
        }
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}

// Update the HTML with the fetched menu items
const menuItemsContainer = document.getElementById('menuItemsContainer');
menuItemsContainer.innerHTML = '';

menuItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    card.dataset.itemId = item.id; // Set the data attribute for item ID

    card.innerHTML = `
        <!-- ... (your existing code) -->
        <button class="btn btn-danger">Delete</button>
        <!-- ... (your existing code) -->
    `;

    menuItemsContainer.appendChild(card);
});


// Sidebar and section functionality

function closeNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var toggleBtn = document.getElementById("toggle-btn");

    sidebar.style.left = "-250px";
    main.style.marginLeft = "0";
    toggleBtn.style.opacity = 1; /* Make the toggle button visible */
}

function openNav() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var toggleBtn = document.getElementById("toggle-btn");

    sidebar.style.left = "0";
    main.style.marginLeft = "250px";
    toggleBtn.style.opacity = 0; /* Make the toggle button transparent */
}

function toggleNavVisibility() {
    var sidebar = document.getElementById("sidebar");
    var main = document.getElementById("main");
    var toggleBtn = document.getElementById("toggle-btn");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        main.style.marginLeft = "0";
        toggleBtn.style.opacity = 1; /* Make the toggle button visible */
    } else {
        sidebar.style.left = "0";
        main.style.marginLeft = "250px";
        toggleBtn.style.opacity = 0; /* Make the toggle button transparent */
    }
}

function openSection(sectionId) {
    var sections = ["home", "menu", "catering-orders", "logout"];
    var sidebar = document.getElementById("sidebar");

    // Hide all sections
    for (var i = 0; i < sections.length; i++) {
        document.getElementById(sections[i]).style.display = "none";
    }

    // Display the selected section
    document.getElementById(sectionId).style.display = "flex";

    // Fetch menu items only if the selected section is "menu"
    if (sectionId === "menu") {
        console.log("Fetching menu items...");
        fetchMenuItems();
    }

    
    // Do not close the sidebar here
}

function logout() {
    window.sessionStorage.removeItem("employee");
    window.sessionStorage.removeItem("token");
    window.location.href = "../index.html";
}


