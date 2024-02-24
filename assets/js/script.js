// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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


document.addEventListener('DOMContentLoaded', function() {
    const sunMoonToggle = document.querySelector('.sun-moon-toggle');
    const body = document.body;

    console.log("Sun-Moon Toggle:", sunMoonToggle); // Check if the selector finds the element

    sunMoonToggle.addEventListener('click', function() {
        console.log("Toggle clicked"); // Check if the event listener is triggered
        body.classList.toggle('night-mode');
    });
});

 // Function to delay for a specified time
 function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to display header content sequentially
async function displayHeaderContentsSequentially() {
    const companyName = document.querySelector('header h1');
    const tagline = document.querySelector('header p');
    const ctaContainer = document.querySelector('.cta-container');

    companyName.style.display = 'block'; // Display the company name
    await delay(1000); // Wait for 1 second

    tagline.style.display = 'block'; // Display the tagline
    await delay(1000); // Wait for 1 second

    ctaContainer.style.display = 'block'; // Display the call-to-action button
}

// Call the displayHeaderContentsSequentially function
displayHeaderContentsSequentially();






