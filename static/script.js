// Function to toggle visibility of the register form
function toggleRegisterForm() {
    const form = document.getElementById('register-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle visibility of the login form
function toggleLoginForm() {
    const form = document.getElementById('login-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle visibility of the host server form
function toggleHostServerForm() {
    const form = document.getElementById('host-server-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle visibility of the server ID form
function toggleServerIdForm() {
    const form = document.getElementById('server-id-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
