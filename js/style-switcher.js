// toggler style switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor() {
    alternateStyles.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}
// checking if 'color' key exists
if (localStorage.getItem("color") !== null) {
    changeColor();
}

// theme dark and light mode
const dayLight = document.querySelector(".day-night");

dayLight.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
    updateIcon();
})

function themeMode() {
    // checking if 'theme' key exists
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
        }
    }
    updateIcon();
}
themeMode();

function updateIcon() {
    if (document.body.classList.contains("light")) {
        dayLight.querySelector("i").classList.remove("fa-sun");
        dayLight.querySelector("i").classList.add("fa-moon");
    } else {
        dayLight.querySelector("i").classList.remove("fa-moon");
        dayLight.querySelector("i").classList.add("fa-sun");
    }
}