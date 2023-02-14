const playbtn = document.querySelectorAll('.playbtn').length;
const e = document.querySelector('.e');
const k = document.querySelector('.k');
const s = document.querySelector('.s');
const h = document.querySelector('.h');
const w = document.querySelector('.w');
const g = document.querySelector('.g');
const t = document.querySelector('.t');
const c = document.querySelector('.c');
const x = document.querySelector('.x');
const z = document.querySelector('.z');
const q = document.querySelector('.q');
const b = document.querySelector('.b');

if(window.screen.width <= 990){
    alert("DrumPad loyihasiga kompyuter orqali kirilsa imkoniyati ko'proq!")
}

for(let i = 0; i < playbtn; i++){

    document.querySelectorAll(".playbtn")[i].addEventListener("click",function(){

        let buttonInnerHtml = this.innerHTML;


        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "k":
        let kick = new Audio("assets/sounds/kick.mp3");
        kick.play();
        break;

        case "h":
        let hit = new Audio("assets/sounds/pedal hit.mp3");
        hit.play();
        break;

        case "t":
        let tom = new Audio("assets/sounds/lo tom.mp3");
        tom.play();
        break;

        case "s":
        let slap = new Audio("assets/sounds/slap.mp3");
        slap.play();
        break;

        case "c":
        let crash = new Audio("assets/sounds/crash.mp3");
        crash.play();
        break;

        case "g":
        let clav = new Audio("assets/sounds/clav.mp3");
        clav.play();
        break;

        case "w":
        let tamp = new Audio("assets/sounds/tamp.mp3");
        tamp.play();
        break;

        case "x":
        let snare = new Audio("assets/sounds/snare2.mp3");
        snare.play();
        break;

        case "e":
        let sfx = new Audio("assets/sounds/sfx.mp3");
        sfx.play();
        sfx.volume = 0.4;
        break;

        case "z":
        let shaker = new Audio("assets/sounds/shaker.mp3");
        shaker.play();
        break;

        case "q":
        let tamp2 = new Audio("assets/sounds/tamp2.mp3");
        tamp2.play();
        break;

        case "b":
        let beep = new Audio("assets/sounds/beep.mp3");
        beep.play();
        break;

        default:console.log(key);
    }
}

e.onclick = function(){
    let sfx = new Audio("assets/sounds/sfx.mp3");
    sfx.play();
    e.classList.add("activeBtn");

    setTimeout(() => {
        e.classList.remove("activeBtn")
    }, 2600);
}

k.onclick = function(){
    let kick = new Audio("assets/sounds/kick.mp3");
    kick.play();
    k.classList.add("activeBtn");

    setTimeout(() => {
        k.classList.remove("activeBtn")
    }, 100);
}

h.onclick = function(){
    let hit = new Audio("assets/sounds/pedal hit.mp3");
    hit.play();
    h.classList.add("activeBtn");

    setTimeout(() => {
        h.classList.remove("activeBtn")
    }, 100);
}

t.onclick = function(){
    let tom = new Audio("assets/sounds/lo tom.mp3");
    tom.play();
    t.classList.add("activeBtn");

    setTimeout(() => {
        t.classList.remove("activeBtn")
    }, 100);
}

s.onclick = function(){
    let slap = new Audio("assets/sounds/slap.mp3");
    slap.play();
    s.classList.add("activeBtn");

    setTimeout(() => {
        s.classList.remove("activeBtn")
    }, 100);
}

c.onclick = function(){
    let crash = new Audio("assets/sounds/crash.mp3");
    crash.play();
    c.classList.add("activeBtn");

    setTimeout(() => {
        c.classList.remove("activeBtn")
    }, 100);
}

g.onclick = function(){
    let clav = new Audio("assets/sounds/clav.mp3");
    clav.play();
    g.classList.add("activeBtn");

    setTimeout(() => {
        g.classList.remove("activeBtn")
    }, 100);
}

w.onclick = function(){
    let tamp = new Audio("assets/sounds/tamp.mp3");
    tamp.play();
    w.classList.add("activeBtn");

    setTimeout(() => {
        w.classList.remove("activeBtn")
    }, 100);
}

x.onclick = function(){
    let snare = new Audio("assets/sounds/snare2.mp3");
    snare.play();
    x.classList.add("activeBtn");

    setTimeout(() => {
        x.classList.remove("activeBtn")
    }, 100);
}

z.onclick = function(){
    let shaker = new Audio("assets/sounds/shaker.mp3");
    shaker.play();
    z.classList.add("activeBtn");

    setTimeout(() => {
        z.classList.remove("activeBtn")
    }, 100);
}

q.onclick = function(){
    let tamp2 = new Audio("assets/sounds/tamp2.mp3");
    tamp2.play();
    q.classList.add("activeBtn");

    setTimeout(() => {
        q.classList.remove("activeBtn")
    }, 100);
}

b.onclick = function(){
    let beep = new Audio("assets/sounds/beep.mp3");
    beep.play();
    b.classList.add("activeBtn");

    setTimeout(() => {
        b.classList.remove("activeBtn")
    }, 100);
}


function buttonAnimation(currentKey){
    let activeBUtton = document.querySelector("." + currentKey);
    activeBUtton.classList.add("activeBtn");

    setTimeout(function(){
        activeBUtton.classList.remove("activeBtn");
    },200);
}

const beat1 = document.querySelector(".beat1");
const melodyy1 = document.querySelector(".melody1");
const melodyy2 = document.querySelector(".melody2");
const uzbb1 = document.querySelector(".uzb1");
const hihat = document.querySelector(".hihat");
const flex = document.querySelector(".flex");
const beatt2 = document.querySelector(".beatt2");
const reset = document.querySelector(".reset");

const beat1sound =document.querySelector(".beat1sound");
const melodysound =document.querySelector(".melodysound");
const melodysound2 =document.querySelector(".melodysound2");
const hitsound =document.querySelector(".hitsound");
const uzmelod =document.querySelector(".uzbmelod");
const flexsound =document.querySelector(".flexsound");
const beat2sound =document.querySelector(".beat2sound");

function beat1Play(){
    beat1sound.play();
    beat1.classList.add("active")
}

function beat2(){
    beat2sound.play();
    beatt2.classList.add("active")
}

function hat(){
    hitsound.play();
    hihat.classList.add("active")
}

function uzb1(){
    uzmelod.play();
    uzmelod.volume = 0.2;
    uzbb1.classList.add("active")
}

function melody1(){
    melodysound.play();
    melodysound.volume = 0.4;
    melodyy1.classList.add("active")
}

function melody2(){
    melodysound2.play();
    melodysound2.volume = 0.2;
    melodyy2.classList.add("active")
}

function flexm(){
    flexsound.play();
    flex.classList.add("active")
}


function pauseAudio(){
    beat1sound.pause();
    melodysound.pause();
    melodysound2.pause();
    uzmelod.pause();
    hitsound.pause();
    flexsound.pause();
    beat2sound.pause();

    beatt2.classList.remove("active")
    flex.classList.remove("active")
    beat1.classList.remove("active")
    melodyy1.classList.remove("active")
    melodyy2.classList.remove("active")
    hihat.classList.remove("active")
    uzbb1.classList.remove("active")
}