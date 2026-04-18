/* ==============================
PRIMENEST REAL ESTATE JAVASCRIPT
============================== */


/* Smooth Scroll Navigation */

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault()

const target = document.querySelector(this.getAttribute('href'))

target.scrollIntoView({
behavior: 'smooth'
})

})

})


/* Property Search Interaction */

const searchButton = document.querySelector(".search-box button")

if(searchButton){

searchButton.addEventListener("click", () => {

const type = document.querySelector(".search-box select").value

if(type === "House"){
window.location.href = "houses.html"
}

else if(type === "Apartment"){
window.location.href = "apartments.html"
}

else if(type === "Villa"){
window.location.href = "villas.html"
}

else if(type === "Penthouse"){
window.location.href = "penthouses.html"
}

else{
alert("Please select a property type")
}

})

}


/* Gallery Lightbox */

const galleryImages = document.querySelectorAll(".gallery-grid img")

const lightbox = document.createElement("div")

lightbox.id = "lightbox"

document.body.appendChild(lightbox)

galleryImages.forEach(img => {

img.addEventListener("click", e => {

lightbox.classList.add("active")

const image = document.createElement("img")

image.src = img.src

while(lightbox.firstChild){
lightbox.removeChild(lightbox.firstChild)
}

lightbox.appendChild(image)

})

})


lightbox.addEventListener("click", e => {

if(e.target !== e.currentTarget) return

lightbox.classList.remove("active")

})


/* Floating WhatsApp Button */

const whatsapp = document.createElement("a")

whatsapp.href = "https://wa.me/254700000000"

whatsapp.innerHTML = "💬"

whatsapp.className = "floating-whatsapp"

document.body.appendChild(whatsapp)



/* Floating Call Button */

const call = document.createElement("a")

call.href = "tel:+254700000000"

call.innerHTML = "📞"

call.className = "floating-call"

document.body.appendChild(call)



/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll("section")

window.addEventListener("scroll", () => {

revealElements.forEach(el => {

const windowHeight = window.innerHeight

const elementTop = el.getBoundingClientRect().top

const revealPoint = 150

if(elementTop < windowHeight - revealPoint){

el.classList.add("active")

}

})

})


/* Hero Image Rotator */

const hero = document.querySelector(".hero")

const heroImages = [

"https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
"https://images.unsplash.com/photo-1613977257363-707ba9348227",
"https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
"https://images.unsplash.com/photo-1582407947304-fd86f028f716",
"https://images.unsplash.com/photo-1572120360610-d971b9d7767c"

]

let heroIndex = 0

setInterval(() => {

heroIndex++

if(heroIndex >= heroImages.length){
heroIndex = 0
}

hero.style.backgroundImage = "url(" + heroImages[heroIndex] + ")"

}, 5000)

function calculateMortgage(){

let price = document.getElementById("price").value;
let down = document.getElementById("downpayment").value;
let interest = document.getElementById("interest").value / 100 / 12;
let years = document.getElementById("years").value * 12;

let loan = price - down;

let payment = loan * interest * Math.pow(1 + interest, years) / (Math.pow(1 + interest, years) - 1);

payment = payment.toFixed(2);

document.getElementById("result").innerText =
"Estimated Monthly Payment: $" + payment;

}

// PROPERTY CATEGORY CLICK NAVIGATION

const categories = document.querySelectorAll(".category");

categories[0].addEventListener("click", () => {
window.location.href = "houses.html";
});

categories[1].addEventListener("click", () => {
window.location.href = "apartments.html";
});

categories[2].addEventListener("click", () => {
window.location.href = "beachhomes.html";
});

categories[3].addEventListener("click", () => {
window.location.href = "penthouses.html";
});

categories[4].addEventListener("click", () => {
window.location.href = "villas.html";
});


<script>

function filterProperties(){

let locationInput =
document.getElementById("searchLocation").value.toLowerCase()

let typeInput =
document.getElementById("propertyType").value

let priceInput =
document.getElementById("priceRange").value

let cards =
document.querySelectorAll(".property-card")

cards.forEach(card => {

let location = card.dataset.location.toLowerCase()
let type = card.dataset.type
let price = parseInt(card.dataset.price)

let show = true

if(locationInput && !location.includes(locationInput)){
show = false
}

if(typeInput && type !== typeInput){
show = false
}

if(priceInput && price > priceInput){
show = false
}

card.style.display = show ? "block" : "none"

})

}

</script>
