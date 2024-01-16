const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

const navLink = document.querySelectorAll("nav-link");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-xmark");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-xmark");
  });
});


