// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (replace with your backend logic)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission (replace with your backend logic)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
});
