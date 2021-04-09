const button = document.querySelector(".button");
const buttonactive = button.querySelector(".buttonactive");
const body = document.querySelector("body");



button.addEventListener("click", ()=>{
    
    buttonactive.classList.toggle("active");
    
})


function checkAge(age){
    age >= 21 ? console.log("you can drink in united states"):
    18>= age <21 ? console.log("you can drink in europe"):
    age < 18 ? console.log("you cannot drink"): console.log("you cannot drink anywhere")

}