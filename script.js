document.addEventListener("DOMContentLoaded", () => {

    //  Theme 
    const html = document.documentElement;
    const themeBtn = document.getElementById("theme-toggle");
    const saved = localStorage.getItem("theme") || "light";
    html.setAttribute("data-theme", saved);

    themeBtn.addEventListener("click", () => {
        const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
        html.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
    });

    //  Mobile Menu 
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks   = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
        const open = navLinks.classList.toggle("open");
        menuToggle.classList.toggle("open", open);
        menuToggle.setAttribute("aria-expanded", open);
    });

    navLinks.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    //  Active Nav via IntersectionObserver 
    const sections = document.querySelectorAll("section[id]");
    const links    = document.querySelectorAll(".nav-link");

    const navObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove("active"));
                const a = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (a) a.classList.add("active");
            }
        });
    }, { rootMargin: "-35% 0px -60% 0px" });

    sections.forEach(s => navObs.observe(s));

    //  Scroll Reveal 
    const revealObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

    //  Language Bar Animation 
    const langFills = document.querySelectorAll(".lang-fill");
    langFills.forEach(bar => {
        bar.style.width = "0";
    });

    const langSection = document.getElementById("languages");
    if (langSection) {
        const langObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    langFills.forEach(bar => {
                        bar.style.width = bar.dataset.width;
                    });
                    langObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        langObs.observe(langSection);
    }

    //  Back to Top 
    const backBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        backBtn.classList.toggle("visible", window.scrollY > 320);
    }, { passive: true });

    backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});