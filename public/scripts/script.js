// MOBILE - HAMBURGER ICON FUNCTIONALITY
// store icon as variable
const hamburger = document.querySelector("#mobile-nav");
// store desktop/tablet nav links in a variable (will need to loop through using forEach)
const navWordLinks = document.querySelectorAll(".nav-word");
// store nav container as variable to apply centered column styling for drop down menu
const navBar = document.querySelector(".nav-bar");

const toggleBurger = (e) => {
    navBar.classList.toggle("show-links");
    navWordLinks.forEach((element) => {element.classList.toggle("hide-links")});
    navWordLinks.forEach((element) => {element.classList.toggle("show-links")});
};

hamburger.addEventListener("click", toggleBurger);
