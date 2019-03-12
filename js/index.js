// Your code goes here

const home = document.querySelector(".intro");
console.log(home);
home.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = "#00DFF8"
    console.log("mouse over event");
});
const content = document.querySelector(".content-section");
console.log(content);
content.addEventListener('wheel', function(e){
    e.target.style.backgroundColor = "#316ADC";
    console.log("wheel is going on")
})
const text = document.querySelector(".content-section .text-content");
console.log(text);
text.addEventListener('scroll', function(e) {
    e.target.style.backgroundColor = "#5A243D";
    console.log("scroll happened")
})
const buttonPush = document.querySelector(".btn");
console.log(buttonPush);
buttonPush.addEventListener("click", function(e){
    let newThing = document.createElement("p");
    newThing.textContent = "lorem ipsum is great! We are all awesome!! look at this coder go! it's neat ipsum lorem.... ";
    document.body.appendChild(newThing);
    console.log("scroll down to see new p!")
})


TweenMax.to(".logo-heading", 3, {x:600+300});
TweenMax.to(".img", 2, {rotation:360});
