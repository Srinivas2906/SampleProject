document.addEventListener("DOMContentLoaded", function () {
    // Cursor Effect
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");
    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
    });

    // Dark Mode Toggle
    // const darkModeToggle = document.getElementById("darkModeToggle");
    // const body = document.body;
    // darkModeToggle.addEventListener("click", function () {
    //     body.classList.toggle("dark-mode");
    //     const icon = darkModeToggle.querySelector("i");
    //     icon.classList.toggle("fa-moon");
    //     icon.classList.toggle("fa-sun");
    // });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Reveal Animations using GSAP & ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.service-card').forEach(card => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Testimonial Carousel (Infinite Scroll)
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    testimonialItems.forEach(item => {
        const clone = item.cloneNode(true);
        testimonialCarousel.appendChild(clone);
    });
    testimonialCarousel.style.animationDuration = `${testimonialCarousel.children.length * 10}s`;
    testimonialCarousel.addEventListener('mouseenter', () => {
        testimonialCarousel.style.animationPlayState = 'paused';
    });
    testimonialCarousel.addEventListener('mouseleave', () => {
        testimonialCarousel.style.animationPlayState = 'running';
    });

    // Go to Top Button
    const goToTopButton = document.getElementById('goToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            goToTopButton.style.display = 'flex';
        } else {
            goToTopButton.style.display = 'none';
        }
    });
    goToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Footer Animation
    gsap.utils.toArray('.footer-container > div').forEach((section, index) => {
        gsap.from(section, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: '.footer',
                start: "top bottom-=100",
                toggleActions: "play none none reverse"
            }
        });
    });

    // Image Carousel (Basic)
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }
    setInterval(showNextImage, 1500);

    // Form Submission (Mock)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        contactForm.reset();
    });
});

// // Dark Mode Styles
// const darkModeStyles = document.createElement("style");
// darkModeStyles.innerHTML = `
//     .dark-mode {
//         --primary-color: #333;
//         --secondary-color: #555;
//         --accent-color: #FF6584;
//         --background-color: #111;
//         --text-color: #eee;
//     }
//     .dark-mode .logo {
//         text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
//     }
//     .dark-mode .glass-nav {
//         background: rgba(0, 0, 0, 0.1);
//     }
// `;
// document.head.appendChild(darkModeStyles);
