const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

const navLink = document.querySelectorAll("nav-link");

const skillsTitle = document.getElementsByClassName("title");
const skillsContainers = document.getElementsByClassName("skills");
const skillsContainers_2= document.getElementsByClassName("skills-2");

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

const skillURL =
  "https://raw.githubusercontent.com/aadityamishraa/portfolio/master/data/skills.json";
fetch(skillURL)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < skillsTitle.length; i++) {
      skillsTitle[i].textContent = data[i].title;
    }
    for (let i = 0; i < skillsContainers.length; i++) {
      const currentContainer = skillsContainers[i];

      const currentDataItem = data[i];

      const ulElement = currentContainer.querySelector("ul");

      if (ulElement) {
        currentDataItem.items.forEach((skill, index) => {
          const liElement = document.createElement("li");
          liElement.classList.add("font-play");
          liElement.textContent = skill;
          if (index % 2 == 0) {
            ulElement.appendChild(liElement);
          }
        });
      }
    }
    for (let i = 0; i < skillsContainers_2.length; i++) {
      const currentContainer = skillsContainers_2[i];

      const currentDataItem = data[i];

      const ulElement = currentContainer.querySelector("ul");

      if (ulElement) {
        currentDataItem.items.forEach((skill, index) => {
          const liElement = document.createElement("li");
          liElement.classList.add("font-play");
          liElement.textContent = skill;
          if (index % 2 != 0) {
            ulElement.appendChild(liElement);
          }
        });
      }
    }
  })
  .catch((err) => console.log(err));
