document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const menu = document.getElementById("menu");
    
    // Theme toggle
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Mobile menu toggle (optional)
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("nav").prepend(menuToggle);
    
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});

