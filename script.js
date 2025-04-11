document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const menu = document.getElementById("menu");
    const menuToggle = document.createElement("button");
    
    // Create and style the mobile menu toggle button
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("nav").prepend(menuToggle);
    
    // Theme toggle functionality
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
    
    // Load saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
    
    // Mobile menu toggle functionality
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
        menuToggle.classList.toggle("open");
    });
});
