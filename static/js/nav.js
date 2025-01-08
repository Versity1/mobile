function setActive(element, event) {
    event.preventDefault();
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // Add active class to clicked link
    element.classList.add('active');
}

// splash Auth swipe
function navigateTo(page) {
    document.querySelectorAll('.auth-page').forEach(p => p.classList.remove('active'));
    document.querySelector(`#${page}-page`).classList.add('active');
}

function navigateBack() {
    document.querySelectorAll('.auth-page').forEach(page => {
        page.classList.remove('active');
    });
}

function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function handleSubmit(event, formType) {
    event.preventDefault();
    console.log(`${formType} form submitted`);
    // Add your form submission logic here
}