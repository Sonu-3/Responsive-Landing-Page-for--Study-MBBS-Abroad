// Purpose: To add interactivity to the website
document
  .getElementById("leadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Add form validation logic here
    alert("Form submitted successfully!");
  });

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navbarMenu = document.getElementById("navbar-menu");

  hamburger.addEventListener("click", function () {
    navbarMenu.classList.toggle("hidden");
  });
});
