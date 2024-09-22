// Nav hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Bounce arrow scroll to About section
document.addEventListener('DOMContentLoaded', function () {
  const bounceArrow = document.getElementById('bounce-arrow');
  if (bounceArrow) {
    bounceArrow.addEventListener('click', function () {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  } else {
    console.log("Arrow not found");
  }
});

// Add scrolled class to nav when scrolled
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

// Form validation for email
document.querySelector('form').addEventListener('submit', function (e) {
  const email = document.getElementById('email').value;
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email.');
    e.preventDefault();
  }
});