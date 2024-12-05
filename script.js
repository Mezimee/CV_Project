const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");

// Efekt otwierania menu
menuToggle.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
})