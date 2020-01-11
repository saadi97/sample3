const burger= document.querySelector(".burger");
const navLink= document.querySelector(".nav-link");
const links= document.querySelectorAll(".nav-links a");
burger.addEventListener("click", function(){
    navLink.classList.toggle("nav-links2")
});