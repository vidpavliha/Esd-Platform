function loadForm(formName) {
    const formContainer = document.getElementById('form-container');
    fetch(`../forms/${formName}.html`)
        .then(response => response.text())
        .then(html => {
            formContainer.innerHTML = html;
        })
        .catch(error => {
            console.error(`Error loading the ${formName} form:`, error);
        });
}

function CallMailSending() {
    fetch('https://www.pavliha.eu/vid/esd-platform/').then(response => response.text()).then(data => {document.getElementById('form-container').innerHTML=data;});
}