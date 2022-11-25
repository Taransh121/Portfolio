const project1=document.getElementById("project1");
const project2=document.getElementById("project2");
const project3=document.getElementById("project3");
const project4=document.getElementById("project4");
const project5=document.getElementById("project5");
const project6=document.getElementById("project6");
const myrole=document.getElementById("myrole")
project1.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open('https://github.com/Taransh121/NEWSAPP', '_blank');
})
project2.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open('https://taransh121.github.io/Tic-Tac-toe/', '_blank');
})
project3.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open('https://taransh121.github.io/Calculator/', '_blank');
})
project4.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open('https://github.com/Taransh121/inotebook', '_blank');
})
project5.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open('https://taransh121.github.io/MakeuppWebsite/', '_blank');
})
project6.addEventListener("click",(e)=>{
    e.preventDefault();
    window.open('https://taransh121.github.io/CLOUD-PROJECT/', '_blank');
})
var1=" Web Developer.";
var2=" Professional Coder.";
var3=" Designer."

var Temp = true

setInterval(()=>{
myrole.innerHTML =Temp?var1:var2;
Temp = !Temp
}, 2000)
  