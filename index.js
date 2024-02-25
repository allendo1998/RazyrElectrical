
const navSlide = () => {
    const menuIcon = document.querySelector(".menuIcon");
    const nav = document.querySelector(".navLinks");
    const navLinkList = document.querySelectorAll(".navLinks li");

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinkList.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });
        menuIcon.classList.toggle('toggle');
    });
}

function submitForm() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = 'block';
        emailInput.style.borderColor = 'red';
        return;
    } else {
        emailError.textContent = "";
        emailError.style.display = 'none';
        emailInput.style.borderColor = 'grey';
    }

    // You can add additional validation and form submission logic here
    alert("Form submitted!");
    document.getElementById("contactForm").reset(); // Reset the form after submission
}

function goToOnlineQuote() {
    window.location='#contact-form-section';
}

function goToBookAService() {
    window.location='/book-service/book-service.html';
}

navSlide();