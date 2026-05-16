document.addEventListener("DOMContentLoaded", () => {

    // Navbar Elements
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-link");
    const header = document.querySelector(".header");

    // Safety check
    if (!hamburger || !navLinks || !header) return;

    /* =========================
       Mobile Menu Toggle
    ========================== */
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    /* =========================
       Close Mobile Menu on Link Click
    ========================== */
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    /* =========================
       Scroll Reveal Animation
    ========================== */
    const revealElements = document.querySelectorAll(".reveal, .reveal-right");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const visiblePoint = 120;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - visiblePoint) {
                element.classList.add("active");
            }
        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    /* =========================
       Dynamic Navbar Style on Scroll
    ========================== */
    function updateNavbar() {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 6px 24px rgba(0,0,0,0.35)";
            header.style.background = "rgba(11, 17, 32, 0.96)";
            header.style.backdropFilter = "blur(18px)";
            header.style.webkitBackdropFilter = "blur(18px)";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "rgba(11, 17, 32, 0.85)";
            header.style.backdropFilter = "blur(12px)";
            header.style.webkitBackdropFilter = "blur(12px)";
        }
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar);

    /* =========================
       Smooth Active Link Highlight
    ========================== */
    const sections = document.querySelectorAll("section");

    function highlightNavLink() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active-link");

            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active-link");
            }
        });
    }

    window.addEventListener("scroll", highlightNavLink);
    highlightNavLink();

    /* =========================
       Project Card Click Enhancement
    ========================== */
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-12px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

});