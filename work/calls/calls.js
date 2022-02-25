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
