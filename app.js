// SERVICES OVERLAY

const servicesDesignBtn = document.querySelector(
    ".services-design .services-btn"
);
const servicesDevBtn = document.querySelector(".services-dev .services-btn");
const servicesDev = document.querySelector(".services-modal_dev");
const servicesDesign = document.querySelector(".services-modal_design");
const designClosebtn = document.querySelector(".design-close");
const devClosebtn = document.querySelector(".dev-close");

servicesDesignBtn.addEventListener("click", openOverlayDesign);
servicesDevBtn.addEventListener("click", openOverlayDev);
designClosebtn.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("show");
});
devClosebtn.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("show");
});

function openOverlayDesign() {
    servicesDesign.classList.add("show");
}
function openOverlayDev() {
    servicesDev.classList.add("show");
}

// NAVIGATION MENU

const navMenu = document.querySelector(".nav-menu");
const navLines = document.querySelector(".line");
const navlinks = document.querySelector("#navlinks");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("change");
    navlinks.classList.toggle("change");
});

// DARK MODE

const html = document.documentElement;
const home = document.querySelector("#home");
console.log(home);
const displayMenu = document.querySelector(".display-menu");
const moonIcon = document.querySelector(".moon-icon");
displayMenu.addEventListener("click", () => {
    displayMenu.classList.toggle("change");

    if (displayMenu.className.includes("change")) {
        html.setAttribute("data-theme", "dark");
        home.classList.remove("default-bg");
        home.classList.add("new-bg");
    } else {
        html.setAttribute("data-theme", "light");
        home.classList.remove("new-bg");
        home.classList.add("default-bg");
    }
});

// FORM SUBMIT EVENT
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
