/*=========================================
SK PRIME ESTATE PREMIUM SCRIPT
=========================================*/

// Navbar Background Change

window.addEventListener("scroll", function () {

const navbar = document.querySelector(".header");

if (window.scrollY > 80) {

navbar.style.background = "rgba(0,0,0,0.92)";

} else {

navbar.style.background = "rgba(0,0,0,0.65)";

}

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

});

});

});


// Fade Animation

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("show");

}

});

}, {

threshold: 0.2

});

document.querySelectorAll(

".feature-card,.location-card,.gallery-item,.highlight-card,.contact-card"

).forEach(el => {

observer.observe(el);

});


// Gallery Popup

document.querySelectorAll(".gallery-item img").forEach(img => {

img.addEventListener("click", () => {

window.open(img.src, "_blank");

});

});


// Hero Animation

window.addEventListener("load", () => {

const hero = document.querySelector(".hero-content");

hero.style.opacity = "0";

hero.style.transform = "translateY(50px)";

setTimeout(() => {

hero.style.transition = "1.2s";

hero.style.opacity = "1";

hero.style.transform = "translateY(0px)";

}, 300);

});


// Floating Buttons Animation

setInterval(() => {

document.querySelector(".floating-call").classList.toggle("pulse");

document.querySelector(".floating-whatsapp").classList.toggle("pulse");

}, 1200);


// Console Message

console.log("SK PRIME ESTATE PREMIUM WEBSITE LOADED");