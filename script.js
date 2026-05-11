document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    // Mobile menu toggle
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });


    // Scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal, .reveal-right");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const visiblePoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - visiblePoint) {
                element.classList.add("active");
            }
        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);


    // Navbar style on scroll
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
            header.style.background = "rgba(11, 17, 32, 0.95)";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "rgba(11, 17, 32, 0.85)";
        }
    });

});