document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // For demo purposes, we use hardcoded username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Geodatabase' && password === 'password') {
        // Redirect to another HTML page on successful login
        window.location.href = 'MainPage.html';
    } else {
        alert('Invalid username or password contact Administrator mzoxolos@statssa.gov.za');
    }
});
