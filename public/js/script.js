const loginEndpoint = "https://vecchiabackend.azurewebsites.net/employees/login"

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Make an asynchronous login request
        fetch(loginEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: username,
                password: password,
            }),
        })
        .then(response => {
            console.log(response);
            if (response.ok) {
                console.log('Login successful');
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
        });
    });