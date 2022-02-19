// SERVICES OVERLAY

const servicesDesignBtn = document.querySelector(".services-design .services-btn");
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

// SHOW TOP BACKGROUND
const aboutSection = document.querySelector("#about");
window.addEventListener("scroll", () => {
	if (window.pageYOffset + window.innerHeight >= aboutSection.offsetHeight / 2) {
		document.querySelector(".top-bg").classList.add("change");
	}
});

// name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xjvlwony"
//                 method="post"

// FORM SUBMIT EVENT
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	sendData();
	form.reset();
	console.log(e);
});

function sendData() {
	let userName = document.querySelector(".user-name").value,
		userEmail = document.querySelector(".user-email").value,
		userMessage = document.querySelector(".user-message").value;

	if (userName === "" || userEmail === "" || userMessage === "") {
		alert("PLEASE FILL ALL FORM FIELDS!");
	} else {
		axios({
			url: "https://formspree.io/f/xjvlwony",
			method: "post",
			headers: {
				Accept: "application/json",
			},
			data: {
				name: userName,
				email: userEmail,
				message: userMessage,
			},
		})
			.then((response) => {
				if (response.status === 200) {
					alert("THANKS, YOUR MESSAGE HAS BEEN SENT");
				}
			})
			.catch((error) => {
				alert("OOPS! SOMETHING WENT WRONG");
			});
	}
}
