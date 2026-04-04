/* MOBILE MENU */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});


/* LIGHTBOX GALLERY */

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(img => {

img.addEventListener("click", () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

closeLightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});


/* CLOSE LIGHTBOX WHEN CLICK OUTSIDE */

lightbox.addEventListener("click", (e) => {

if(e.target !== lightboxImg){
lightbox.style.display = "none";
}

});


/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const position = section.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.3;

if(position < screenPosition){

section.style.opacity = "1";
section.style.transform = "translateY(0px)";

}

});

});


/* INITIAL STATE */

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "all 0.6s ease";

});


/* HERO BACKGROUND SLIDER */

const hero = document.querySelector(".hero");

const heroImages = [

"https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
"https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"

];

let heroIndex = 0;

function changeHero(){

hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;

heroIndex++;

if(heroIndex >= heroImages.length){

heroIndex = 0;

}

}

setInterval(changeHero, 5000);


/* DEMO RESERVATION MESSAGE */

const form = document.querySelector(".reservation-form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Reservation request sent successfully! We will contact you shortly.");

form.reset();

});

}
