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

window.addEventListener('scroll', e => {

    if (window.scrollY > 80) {
        scrolled = true;
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
        scrolled = false;
    }

    const start = document.querySelector('#from')
    const end = document.querySelector('#to')
    
    if (scrolled != lastScrolled) {
        if (scrolled) {
            setTimeout(() => {
                illusory(start, end, {
                    duration: '.5s'
                })
            }, 20);
        } else {
            setTimeout(() => {
                illusory(end, start, {
                    duration: '.5s'
                })
            }, 100);
        }
    }

    lastScrolled = scrolled;
})

document.querySelector("#debug").addEventListener('click', () => {
    const start = document.querySelector('#from')
    const end = document.querySelector('#to')
    illusory(start, end)
});
