// Simple mobile nav toggle
const navToggle = document.querySelector("#nav-toggle");
const navList = document.querySelector("#main-nav");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.style.display =
      navList.style.display === "block" ? "none" : "block";
  });
}

// Simple form feedback
const contactForm = document.querySelector("#contact-form");
const formResponse = document.querySelector("#form-response");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (formResponse) {
      formResponse.textContent = "Mahalo! Your message was sent.";
    }
    contactForm.reset();
  });
}
