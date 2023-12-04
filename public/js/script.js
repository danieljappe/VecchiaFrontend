const loginEndpoint = "https://vecchiabackend.azurewebsites.net/employees/login";
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const loadingGif = document.getElementById('loading-gif');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Hide the button and show loading GIF
    loginButton.style.display = 'none';
    loadingGif.style = "display: block; margin-left: auto; margin-right: auto; width: auto; height: 10vh;";
    errorMessage.style.display = 'none';


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Set a timeout of 15 seconds for the fetch request
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Server didn\'t respond. Please try again.'));
        }, 15000);
    });

    // Make an asynchronous login request with a timeout
    Promise.race([
        timeoutPromise,
        fetch(loginEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        }),
    ])
    .then(async (response) => {
        console.log(response);
        if (response.ok) {
            console.log('Login successful');
            const employeeData = await response.json(); // Wait for the JSON data
            console.log('Employee Data:', employeeData); // Log the data
            window.sessionStorage.setItem('employee', JSON.stringify(employeeData));
            // Successful login, redirect to the specified location
            window.location.href = "html/employee.html";
        } else {
            // Handle login failure (show an error message, etc.)
            console.error('Login failed');
        }
    })
    .catch(error => {
        // Handle network or other errors
        console.error('Error during login:', error);
        // Display the error message
        errorMessage.style.display = 'block';
    })
    .finally(() => {
        // Show the button and hide loading GIF
        loginButton.style.display = 'block';
        loadingGif.style.display = 'none';
    });
});

// Slideshow

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)

    // Initial display
    showSlide(currentSlide);
});



// Function to interpolate between two colors based on a progress value
function interpolateColor(color1, color2, progress) {
    const r = Math.round(parseInt(color1.substring(1, 3), 16) * (1 - progress) + parseInt(color2.substring(1, 3), 16) * progress);
    const g = Math.round(parseInt(color1.substring(3, 5), 16) * (1 - progress) + parseInt(color2.substring(3, 5), 16) * progress);
    const b = Math.round(parseInt(color1.substring(5, 7), 16) * (1 - progress) + parseInt(color2.substring(5, 7), 16) * progress);
    return `#${(r < 16 ? '0' : '')}${r.toString(16)}${(g < 16 ? '0' : '')}${g.toString(16)}${(b < 16 ? '0' : '')}${b.toString(16)}`;
}