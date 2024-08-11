// // document.addEventListener("DOMContentLoaded", function () {
// //     // Cursor Effect
// //     const cursor = document.querySelector(".cursor");
// //     const follower = document.querySelector(".cursor-follower");

// //     document.addEventListener("mousemove", function (e) {
// //         cursor.style.left = e.clientX + "px";
// //         cursor.style.top = e.clientY + "px";
// //         follower.style.left = e.clientX + "px";
// //         follower.style.top = e.clientY + "px";
// //     });

// //     // Dark Mode Toggle
// //     const darkModeToggle = document.getElementById("darkModeToggle");
// //     const body = document.body;

// //     darkModeToggle.addEventListener("click", function () {
// //         body.classList.toggle("dark-mode");
// //         const icon = darkModeToggle.querySelector("i");
// //         if (body.classList.contains("dark-mode")) {
// //             icon.classList.remove("fa-moon");
// //             icon.classList.add("fa-sun");
// //         } else {
// //             icon.classList.remove("fa-sun");
// //             icon.classList.add("fa-moon");
// //         }
// //     });

// //     // Smooth Scroll
// //     const navLinks = document.querySelectorAll("nav ul li a");
// //     navLinks.forEach(link => {
// //         link.addEventListener("click", function (e) {
// //             e.preventDefault();
// //             const targetId = this.getAttribute("href").substring(1);
// //             const targetElement = document.getElementById(targetId);
// //             window.scrollTo({
// //                 top: targetElement.offsetTop - 80, // Adjust scroll position for fixed header
// //                 behavior: "smooth"
// //             });
// //         });
// //     });

// //     // Scroll Reveal Animations
// //     ScrollReveal().reveal('.section-title', { delay: 200 });
// //     ScrollReveal().reveal('.service-card', { delay: 300 });
// //     ScrollReveal().reveal('.process-item', { delay: 400 });
// //     ScrollReveal().reveal('.contact-content', { delay: 500 });

// //     // GSAP Animations
// //     gsap.from(".hero-content", { duration: 1, y: -50, opacity: 0 });
// //     gsap.from(".hero-image", { duration: 1, x: 50, opacity: 0 });
// //     gsap.from(".scroll-indicator", { duration: 1, delay: 1, y: 10, repeat: -1, yoyo: true });
// // });

// // // Dark Mode Styles
// // const darkModeStyles = document.createElement("style");
// // darkModeStyles.innerHTML = `
// //     .dark-mode {
// //         --primary-color: #333;
// //         --secondary-color: #555;
// //         --accent-color: #FF6584;
// //         --background-color: #111;
// //         --text-color: #eee;
// //     }
// //     .dark-mode .logo {
// //         text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
// //     }
// //     .dark-mode .glass-nav {
// //         background: rgba(0, 0, 0, 0.1);
// //     }
// // `;
// // document.head.appendChild(darkModeStyles);


// // Animations and Effects
// document.addEventListener('DOMContentLoaded', () => {
//     // Smooth scroll for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//       anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//         });
//       });
//     });
  
//     // Parallax effect for header
//     window.addEventListener('scroll', () => {
//       const header = document.querySelector('.header');
//       header.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
//     });
  
//     // Animate service cards on scroll
//     const serviceCards = document.querySelectorAll('.service-card');
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = '1';
//           entry.target.style.transform = 'translateY(0)';
//         }
//       });
//     }, { threshold: 0.1 });
  
//     serviceCards.forEach(card => {
//       card.style.opacity = '0';
//       card.style.transform = 'translateY(20px)';
//       card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//       observer.observe(card);
//     });
  
//     // Testimonial carousel
//     const testimonials = document.querySelectorAll('.testimonial-item');
//     let currentTestimonial = 0;
  
//     function showNextTestimonial() {
//       testimonials[currentTestimonial].classList.remove('active');
//       currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//       testimonials[currentTestimonial].classList.add('active');
//     }
  
//     setInterval(showNextTestimonial, 5000);
  
//     // Hamburger menu functionality
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const navLinks = document.querySelector('.nav-links');
  
//     hamburgerMenu.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//       hamburgerMenu.classList.toggle('active');
//     });
  
//     // Close menu when a link is clicked
//     document.querySelectorAll('.nav-links a').forEach(link => {
//       link.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//         hamburgerMenu.classList.remove('active');
//       });
//     });
//   });
  
//   // GSAP animations
//   gsap.registerPlugin(ScrollTrigger);
  
//   gsap.from('.header', {
//     opacity: 0,
//     y: -50,
//     duration: 1,
//     ease: 'power3.out'
//   });
  
//   gsap.from('.content-wrapper', {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     ease: 'power3.out',
//     delay: 0.5
//   });
  
//   gsap.from('.process-item', {
//     scrollTrigger: {
//       trigger: '.process-container',
//       start: 'top 80%'
//     },
//     opacity: 0,
//     y: 50,
//     stagger: 0.2,
//     duration: 0.8,
//     ease: 'power3.out'
//   });
  
//   gsap.from('.team-showcase', {
//     scrollTrigger: {
//       trigger: '.team-showcase',
//       start: 'top 80%'
//     },
//     opacity: 0,
//     scale: 0.9,
//     duration: 1,
//     ease: 'power3.out'
//   });
  
//   gsap.from('.contact-container', {
//     scrollTrigger: {
//       trigger: '.contact-section',
//       start: 'top 80%'
//     },
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     ease: 'power3.out'
//   });