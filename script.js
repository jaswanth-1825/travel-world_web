// ==============================
// Welcome Message
// ==============================

window.onload = function () {
    console.log("Welcome to Explore India!");
};

// ==============================
// Book Now Button
// ==============================

let buttons = document.querySelectorAll(".card-btn");

buttons.forEach(function(button){

    button.addEventListener("click",function(){

        alert("Thank you for choosing Explore India!\nRedirecting to Booking Page.");

    });

});

// ==============================
// Hero Button
// ==============================

let exploreBtn = document.querySelector(".btn");

if(exploreBtn){

exploreBtn.addEventListener("click",function(){

    alert("Explore our exciting travel packages!");

});

}

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ==============================
// Scroll Animation
// ==============================

window.addEventListener("scroll",function(){

let header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#006666";

}
else{

header.style.background="#008080";

}

});

// ==============================
// Booking Form Validation
// ==============================

let form=document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

let name=document.querySelector('input[type="text"]').value;

let email=document.querySelector('input[type="email"]').value;

let phone=document.querySelector('input[type="tel"]').value;

if(name=="" || email=="" || phone==""){

e.preventDefault();

alert("Please fill all required fields.");

}
else{

alert("Booking Successful!");

}

});

}