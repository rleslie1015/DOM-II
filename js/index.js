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
    newThing.textContent = "lorem ipsum lorem ipsum sorem lipsum is great! We are all awesome!! look at this coder go! it's neat ipsum lorem lorem ipsum sorem lipsum .... ";
    document.body.appendChild(newThing);
    console.log("scroll down to see new p!")
})

const aTags = document.querySelectorAll('a');

aTags.forEach(function(currentValue){
  
  currentValue.addEventListener('click', function(e){
    e.preventDefault();
    e.target.style.color = "red";
  });
});

TweenMax.from(".logo-heading", 3, {x:200, ease:Bounce.easeOut, delay: 2});
TweenMax.to(".img", 2, {rotation:360});
//TweenLite.to("logo-heading", 2.5, { ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}), y: -500 });