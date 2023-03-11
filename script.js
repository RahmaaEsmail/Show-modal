'use strict';

let showModals = document.querySelectorAll(".show-modal");
let overlay = document.querySelector(".overlay");
let boxModal = document.querySelector(".box-modal");
let btncloseModal = document.querySelector(".close-modal");



const openModal = function() {
    overlay.classList.add("visible-overlay")
}

const closeModal = function (){
    overlay.classList.remove("visible-overlay");
}

showModals.forEach((showModal) => {
    showModal.addEventListener("click", openModal)
})
btncloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown",(e)=>{
   if(e.key === "Escape") {
       if (overlay.classList.contains("visible-overlay")) {
        closeModal()
       }
   }
})


