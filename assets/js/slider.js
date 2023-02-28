"use strict"


let leftIcon = document.querySelector(".main .left");
let rightIcon = document.querySelector(".main .right");
let lines = document.querySelector(".main .nav-dots")



lines.addEventListener("click",e=>{
    let targetLine=e.target.closest("div");
    let activeImage=document.querySelectorAll("img");  
    
    activeImage.forEach(image => {
        if(image.getAttribute("data-id")==targetLine.getAttribute("data-id")){
            image.classList.add("active-image")
        }else{
            image.classList.remove("active-image")
        }
        
    });

    if(!targetLine) return;
});



function rightSlider() {
    let activeImage = document.querySelector(".active-image");
    activeImage.classList.remove("active-image");
    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active-image");
    } else {
        activeImage.parentNode.firstElementChild.classList.add("active-image");
    }

}


function leftSlider() {
    let activeImage = document.querySelector(".active-image");
    activeImage.classList.remove("active-image");
    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active-image");
    } else {
        activeImage.parentNode.lastElementChild.classList.add("active-image");
    }
}





leftIcon.addEventListener("click", leftSlider);
rightIcon.addEventListener("click", rightSlider);