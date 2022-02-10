import { illusory } from 'illusory'

// const start = document.querySelector('#from')
// const end = document.querySelector('#to')
// illusory(start, end)

const hg = document.getElementById('movetext');
let sl = 0;
function scroll() {
    sl = sl + 1;
    if (sl >= hg.scrollWidth/2 - 1) {
        sl = 0;
    }
    hg.scrollLeft = sl;
    window.requestAnimationFrame(scroll);
}
window.requestAnimationFrame(scroll);

const nav = document.querySelector("header")

var scrolled = false;
var lastScrolled = scrolled;

const h1 = document.querySelector("header h1")

window.addEventListener('scroll', e => {

    if (window.scrollY > 65) {
        nav.classList.remove("no-transition")
    } else {
        nav.classList.add("no-transition")
    }

    if (window.scrollY > 80) {
        scrolled = true;
        nav.classList.add("scrolled")
        h1.style.top = ""
    } else {
        nav.classList.remove("scrolled")
        scrolled = false;
        h1.style.top = `${100 - window.scrollY}px`
    }

});
