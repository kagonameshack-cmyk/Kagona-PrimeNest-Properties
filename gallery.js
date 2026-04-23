const reels = document.querySelectorAll('.reel');

reels.forEach(reel => {

const likeBtn = reel.querySelector('.like-btn');
const likeIcon = likeBtn.querySelector('i');
const likeCount = likeBtn.querySelector('.like-count');
const heartAnim = reel.querySelector('.heart-anim');

let liked = false;

/* LOAD SAVED STATE */
const saved = localStorage.getItem("reel_" + reel.dataset.id);
if(saved === "liked"){
liked = true;
likeIcon.classList.replace("fa-regular","fa-solid");
likeBtn.classList.add("liked");
}

/* LIKE BUTTON CLICK */
likeBtn.addEventListener("click", () => {
toggleLike();
});

/* DOUBLE TAP */
let lastTap = 0;

reel.addEventListener("click", () => {
const now = new Date().getTime();
if(now - lastTap < 300){
doubleTapLike();
}
lastTap = now;
});

/* FUNCTIONS */

function toggleLike(){
liked = !liked;

if(liked){
likeIcon.classList.replace("fa-regular","fa-solid");
likeBtn.classList.add("liked");
updateCount(1);
localStorage.setItem("reel_" + reel.dataset.id, "liked");
}else{
likeIcon.classList.replace("fa-solid","fa-regular");
likeBtn.classList.remove("liked");
updateCount(-1);
localStorage.setItem("reel_" + reel.dataset.id, "unliked");
}
}

function doubleTapLike(){
if(!liked){
toggleLike();
}
heartAnim.classList.add("show");

setTimeout(()=>{
heartAnim.classList.remove("show");
},600);
}

/* ANIMATED COUNTER */
function updateCount(change){
let count = parseInt(likeCount.innerText);
let newCount = count + change;

let start = count;
let end = newCount;

let duration = 200;
let startTime = null;

function animate(time){
if(!startTime) startTime = time;
let progress = time - startTime;
let val = Math.floor(start + (end - start) * (progress / duration));

likeCount.innerText = val;

if(progress < duration){
requestAnimationFrame(animate);
}else{
likeCount.innerText = end;
}
}

requestAnimationFrame(animate);
}

});


document.querySelector(".back-btn").addEventListener("click", () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html"; // fallback homepage
    }
});


document.getElementById("sendBtn").addEventListener("click", () => {
    const input = document.getElementById("commentInput");

    if(input.value.trim() !== ""){
        console.log("Comment:", input.value);
        input.value = "";
    }
});


const filterBtn = document.querySelector(".filter-btn");
const filterMenu = document.querySelector(".filter-menu");
const container = document.querySelector(".reel-container");

// Toggle menu
filterBtn.addEventListener("click", () => {
    filterMenu.style.display =
        filterMenu.style.display === "block" ? "none" : "block";
});

// Sorting
document.querySelectorAll(".filter-menu div").forEach(option => {
    option.addEventListener("click", () => {

        const sort = option.dataset.sort;
        const reels = Array.from(document.querySelectorAll(".reel"));

        if(sort === "new"){
            reels.reverse();
        }

        container.innerHTML = "";
        reels.forEach(r => container.appendChild(r));

        filterMenu.style.display = "none";
    });
});
