
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
    window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }
}

function goToOnlineQuote() {
    window.location='#contact-form-section';
}

function goToBookAService() {
    window.location='./book-service.html';
}

navSlide();