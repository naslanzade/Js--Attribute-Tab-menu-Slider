"use strict"


let leftIcon = document.querySelector(".main .left");
let rightIcon = document.querySelector(".main .right");
let lines = document.querySelectorAll(".main .line");



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


function dots() {
    let activeImage = document.querySelector(".active-image");
    activeImage.classList.remove("active-image");
    if (activeImage.getAttribute("data-id") == lines.getAttribute("data-id")) {
        lines.classList.add("active");
    } else {
        lines.classList.remove("active");
    }
}


// lines.addEventListner("click", dots);

rightIcon.addEventListener("click", rightSlider);

leftIcon.addEventListener("click", leftSlider);