const allowedEmails = [
    "example1@email.com",
    "example2@email.com",
    "soteroffice@gmail.com"
];

function login() {
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const gameContainer = document.getElementById('game-container');

    console.log("Entered Email:", email); // Debugging

    if (allowedEmails.includes(email)) {
        errorMessage.textContent = '';
        loginContainer.style.display = 'none';
        gameContainer.style.display = 'block';
        console.log("Login successful!"); // Debugging
    } else {
        errorMessage.textContent = 'Email not authorized!';
        console.log("Login failed!"); // Debugging
    }
}
