function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "Thank you! Your message has been sent.";
    status.style.color = "green";
    form.reset();
});
