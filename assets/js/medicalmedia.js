"use strict";
let leftIcon = document.querySelector(".heading .left");
let rightIcon = document.querySelector(".heading .right");




function leftBtn() {
    document.querySelector(".heading .left").disabled = true;
}


function rightBtn() {
    document.querySelector(".heading .left").disabled = true;
}


leftIcon.addEventListener("click", function () {
    let cards = document.querySelector("#main .cards .d-none");
    cards.classList.remove("d-none");
    if (cards.previousElementSibling != null) {
        leftBtn();
    }else{
        cards.previousElementSibling.classList.remove("active-card");
        cards.previousElementSibling.classList.add("d-none");
        cards.nextElementSibling.classList.add("active-card")
    }
})


rightIcon.addEventListener("click", function () {
    let cards = document.querySelector("#main .cards .d-none");
    cards.classList.remove("d-none");
    if (cards.nextElementSibling != null) {
        rightBtn();
    } else {
        cards.nextElementSibling.classList.remove("d-none").add("active-card")
        cards.previousElementSibling.classList.add("d-none");
    }

})





