const track = document.querySelector(".gallery-track");

document.querySelector(".slide-btn.right").onclick = () =>{
track.scrollBy({left:350, behavior:"smooth"});
}

document.querySelector(".slide-btn.left").onclick = () =>{
track.scrollBy({left:-350, behavior:"smooth"});
}
