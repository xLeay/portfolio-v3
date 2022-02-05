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
window.addEventListener('scroll', e => {
    if (window.scrollY > 80) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
})