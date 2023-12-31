const loginEndpoint = "https://vecchiabackend.azurewebsites.net/employees/login";
//const loginEndpoint = "https://localhost:8080/employees/login";
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');
const loadingGif = document.getElementById('loading-gif');
const errorMessage = document.getElementById('error-message');

const employeeData = JSON.parse(window.sessionStorage.getItem('employee'));
console.log('Employee Data in index.html(should be null):', employeeData);

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
            let token = employeeData.token;
            window.sessionStorage.setItem('token', token);
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


// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in'); // Add a class to trigger the sliding animation
        observer.unobserve(entry.target); // Stop observing once the animation is applied
      }
    });
  }
  
  // Create an intersection observer for '.about-box' elements
  const aboutBoxObserver = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
  document.querySelectorAll('.about-box').forEach(box => {
    aboutBoxObserver.observe(box);
  });
  
    // Create a separate intersection observer for '.buffet-item' elements
    const buffetObserver = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
    document.querySelectorAll('.buffet-item').forEach(item => {
    buffetObserver.observe(item);
  });

  // Send buffet email
  document.getElementById('emailButton').addEventListener('click', function() {
    var buffetOption = document.querySelector('input[name="buffetOption"]:checked').value;
    var name = document.getElementById('name').value;
    // TODO: Change email to vecchia
    var email = "danieljappe@gmail.com"
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
  
    var emailBody = 
      'Buffet Option: ' + encodeURIComponent(buffetOption) + '%0D%0A' +
      'Name: ' + encodeURIComponent(name) + '%0D%0A' +
      'Phone Number: ' + encodeURIComponent(phone) + '%0D%0A' +
      'Address: ' + encodeURIComponent(address);
  
    var mailtoLink = 'mailto:' + encodeURIComponent(email) + 
                     '?subject=' + encodeURIComponent('Buffet Booking') + 
                     '&body=' + emailBody;
  
    window.location.href = mailtoLink;
  });
  
  window.addEventListener('scroll', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var isNavbarExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';

    if (isNavbarExpanded) {
        navbarToggler.click();
    }
});

