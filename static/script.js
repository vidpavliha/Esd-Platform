// Function to toggle the display of forms with fade effect
function toggleForm(formId) {
    // Hide all forms first
    let forms = document.querySelectorAll('.form');
    forms.forEach(function(form) {
        form.classList.remove('show'); // Hide form by removing "show" class
    });

    // Show the selected form with fade effect
    let selectedForm = document.getElementById(formId);
    selectedForm.classList.add('show'); // Show selected form with "show" class
}

// Example functions for toggling forms
function toggleRegisterForm() {
    toggleForm('register-form');
}

function toggleLoginForm() {
    toggleForm('login-form');
}

function toggleHostServerForm() {
    toggleForm('host-server-form');
}

function toggleServerIdForm() {
    toggleForm('server-id-form');
}
