const share = document.querySelector(".share");
const slide = document.querySelector(".slide");
const slideup = document.querySelector(".slideup");

share.addEventListener("click",()=>{
    slide.classList.toggle("onclick");

    share.classList.toggle("active");
    slideup.classList.toggle("onclick");
    
})
