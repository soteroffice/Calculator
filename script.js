const allowedEmails = [
    "example1@email.com",
    "example2@email.com",
    "example3@email.com"
];

function login() {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.getElementById('login-container');
    const gameContainer = document.getElementById('game-container');

    if (allowedEmails.includes(email)) {
        errorMessage.textContent = '';
        loginContainer.style.display = 'none';
        gameContainer.style.display = 'block';
    } else {
        errorMessage.textContent = 'Email not authorized!';
    }
}

function loadGame(gameName) {
    const iframe = document.getElementById('game-frame');
    
    if (gameName === 'eaglercraft') {
        iframe.src = 'games/eaglercraft.1.5.2.html';
    }

    iframe.style.display = 'block';
}
