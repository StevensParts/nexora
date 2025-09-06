// assets/js/app.js

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// Update footer year
const yearEl = document.getElementById("y");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
