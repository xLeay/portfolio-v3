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

const h1 = document.querySelector("#yaelA")

window.addEventListener('scroll', e => {

    if (window.scrollY > 65) {
        nav.classList.remove("no-transition")
    } else {
        nav.classList.add("no-transition")
    }

    if (window.scrollY > 80) {
        scrolled = true;
        nav.classList.add("scrolled")
        h1 ? h1.style.top = "" : null
    } else {
        nav.classList.remove("scrolled")
        scrolled = false;
        h1 ? h1.style.top = `${100 - window.scrollY}px` : null
    }
});
/* Nav shrink */ /* Nav shrink */ /* Nav shrink */ /* Nav shrink */ /* Nav shrink */ 

/* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const scrollctn = document.querySelector('.slider');
// const azul = document.querySelector('#azul');
// const calls = document.querySelector('#calls');
// const msm = document.querySelector('#msm');




left.addEventListener('click', e => {

    // console.log(scrollctn.scrollLeft);

    // scrollctn.scrollLeft -= scrollctn.scrollWidth;
    // scrollctn.scrollTo({
    //     top: 0,
    //     left: scrollctn.scrollLeft -= scrollctn.scrollWidth,
    //     behavior: 'smooth'
    // })

    scrollctn.scrollBy({
        top: 0,
        left: -50,
        behavior: 'smooth'
      })
})


right.addEventListener('click', e => {
        
    // console.log(scrollctn.scrollLeft);

    scrollctn.scrollBy({
        top: 0,
        left: +50,
        behavior: 'smooth'
      })

    if (scrollctn.scrollLeft != 0) {

        scrollctn.scrollBy({
            top: 0,
            left: scrollctn.scrollWidth,
            behavior: 'smooth'
        })
    }

})


/* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */ /* IMAGE SLIDER */
