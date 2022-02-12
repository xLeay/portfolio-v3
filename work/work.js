// import { illusory } from 'illusory'

// const start = document.querySelector('#from')
// const end = document.querySelector('#to')
// illusory(start, end)

/* Nav shrink */ /* Nav shrink */ /* Nav shrink */ /* Nav shrink */ /* Nav shrink */ 
const hg = document.getElementById('movetext');
let sl = 0;
function scroll() {
    sl = sl + 1;
    if (sl >= hg.scrollWidth / 2 - 1) {
        sl = 0;
    }
    hg.scrollLeft = sl;
    window.requestAnimationFrame(scroll);
}
window.requestAnimationFrame(scroll);

const nav = document.querySelector("header")

var scrolled = false;
var lastScrolled = scrolled;


window.addEventListener('scroll', e => {

    if (window.scrollY > 65) {
        nav.classList.remove("no-transition")
    } else {
        nav.classList.add("no-transition")
    }

    if (window.scrollY > 80) {
        scrolled = true;
        nav.classList.add("scrolled")

    } else {
        nav.classList.remove("scrolled")
        scrolled = false;

    }
});
/* Nav shrink */ /* Nav shrink */ /* Nav shrink */ /* Nav shrink */ /* Nav shrink */ 



/* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */
const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante() {

    
    items[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');

    items[count].style.animation = "fadein 5s cubic-bezier(.38,.09,.24,1.08) 1 both";
}
suivant.addEventListener('click', slideSuivante);


function slidePrecedente(){

    
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active');

    items[count].style.animation = "fadeout 5s cubic-bezier(.38,.09,.24,1.08) 1 both";

}
precedent.addEventListener('click', slidePrecedente);

function keyPress(e) {
    if (e.keyCode === 37) {
        slidePrecedente();
    } else if (e.keyCode === 39) {
        slideSuivante();
    }
}

document.addEventListener('keydown', keyPress);

setInterval(slideSuivante, 5000);
/* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */

