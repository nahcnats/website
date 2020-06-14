// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Get modal element
const clockitModal = document.getElementById("clockit-modal");
const clockitShow = document.getElementById("show-clockit");
const clockitClose = document.getElementById("close-clockit");
const clockitBottomClose = document.getElementById("bottom-close-clockit");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

// ClockIT Modal listener
clockitShow.addEventListener("click", showClockit);
clockitClose.addEventListener("click", closeClockit);
clockitBottomClose.addEventListener("click", closeClockit);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        // Set Men State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        // Set Men State
        showMenu = false;
    }
}

function showClockit() {
    clockitModal.style.display = "block";
}

function closeClockit() {
    clockitModal.style.display = "none";
}
