
document.addEventListener('DOMContentLoaded', function () {
    const loadingOverlay = document.getElementById('loading-overlay');
    setTimeout(function () {
        loadingOverlay.style.display = 'none';
    }, 2300);
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('bg-dark');
        navbar.classList.remove('bg-transparent');
    } else {
        if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
            navbar.classList.remove('bg-dark');
            navbar.classList.add('bg-transparent');
        }
    }
});

// Form validation
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    con
    tactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form inputs
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        const phone = document.querySelector('#phone').value;

        // Basic validation
        let isValid = true;
        let errorMessage = '';

        if (!name.trim()) {
            errorMessage += 'Name is required\n';
            isValid = false;
        }

        if (!email.trim()) {
            errorMessage += 'Email is required\n';
            isValid = false;
        } else if (!isValidEmail(email)) {
            errorMessage += 'Please enter a valid email address\n';
            isValid = false;
        }

        if (!message.trim()) {
            errorMessage += 'Message is required\n';
            isValid = false;
        }

        if (!phone.trim()) {
            errorMessage += 'Phone number is required\n';
            isValid = false;
        } else if (!isValidPhone(phone)) {
            errorMessage += 'Please enter a valid phone number\n';
            isValid = false;
        }

        if (!isValid) {
            alert(errorMessage);
            return;
        }

        // If validation passes, show success message
        showSuccessMessage();
        contactForm.reset();
    });
}

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation helper function
function isValidPhone(phone) {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
}

// Success message function
function showSuccessMessage() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success mt-3';
    successAlert.role = 'alert';
    successAlert.textContent = 'Thank you for your message! We will get back to you soon.';

    const form = document.querySelector('#contactForm');
    form.parentNode.insertBefore(successAlert, form.nextSibling);

    // Remove success message after 5 seconds
    setTimeout(() => {
        successAlert.remove();
    }, 5000);
}

function direct() {
    window.location.href = "./packages.html";
}