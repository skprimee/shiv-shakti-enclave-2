// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Navbar Background on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.7)";
    }
});

// Hero Fade Animation
window.addEventListener("load", () => {
    const hero = document.querySelector(".overlay");
    hero.style.opacity = "0";

    setTimeout(() => {
        hero.style.transition = "1.5s";
        hero.style.opacity = "1";
    }, 300);
});

// Gallery Image Popup
const images = document.querySelectorAll(".gallery img");

images.forEach(img => {
    img.addEventListener("click", () => {
        const popup = window.open("");
        popup.document.write(`
            <title>SK Prime Estate Gallery</title>
            <body style="margin:0;background:#000;display:flex;justify-content:center;align-items:center;height:100vh;">
                <img src="${img.src}" style="max-width:95%;max-height:95%;border-radius:10px;">
            </body>
        `);
    });
});

// Contact Form Message
const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Thank you! Your enquiry has been received. Our team will contact you soon.");

    form.reset();
});

// Console Message
console.log("Welcome to SK Prime Estate");