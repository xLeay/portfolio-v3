const sectionAzul = document.querySelector('.azul');
const stickyAzul = document.querySelector('.js-image_azul');
const sectionCalls = document.querySelector('.calls');
const stickyCalls = document.querySelector('.js-image_calls');
const sectionMsm = document.querySelector('.msm');
const stickyMsm = document.querySelector('.js-image_msm');
const body = document.querySelector('body');
const scrollToTop = document.querySelector('.goTop');
const menuIcon = document.querySelector('.menu-icon');
const menuIconActive = document.querySelector('.menu-icon-active');
const nav = document.querySelector('nav');
const navActive = document.querySelector('.nav-active');
let menuToggled = false;



body.style.backgroundColor = ' var(--background)';
scrollToTop.style.transform = 'translateY(200%)';


[menuIcon, menuIconActive].forEach(menu => {
    menu.addEventListener('click', event => {
        if (!menuToggled) {
            navActive.style.opacity = '1';
            navActive.style.top = '0';
            nav.style.height = '60vh';

            menuToggled = true;

        } else {

            navActive.style.opacity = '0';
            navActive.style.top = '-100%';
            nav.style.height = '75px';

            menuToggled = false;
        }
    });

});

window.addEventListener('scroll', function () {

    console.clear();
    console.log(window.scrollY);
    // scrollToTop.innerHTML = window.scrollY;

    if (window.scrollY >= 400) {
        scrollToTop.style.transition = 'transform 0.2s ease';
        scrollToTop.style.transform = 'translateY(0%)';
    }

    else if (window.scrollY <= 400) {
        scrollToTop.style.transform = 'translateY(200%)';
    }

    if (window.scrollY >= 650) {
        addSticky(stickyAzul);
        body.style.backgroundColor = '#ff000015';
    }

    else if (window.scrollY <= 650) {
        removeSticky(stickyAzul);
        body.style.backgroundColor = 'var(--background)';
    }

    if (window.scrollY >= 1750) {
        addSticky(stickyCalls);
        body.style.backgroundColor = '#0000001a';
    }

    else if (window.scrollY <= 2850) {
        removeSticky(stickyCalls);
    }

    if (window.scrollY >= 2850) {
        removeSticky(stickyAzul);
        removeSticky(stickyCalls);
        body.style.backgroundColor = '#00b3ff17';
    }

});

function isSticky(stickyDiv) {
    if (stickyDiv.classList.contains('sticky')) {
        stickyDiv.style.position = 'fixed';
        stickyDiv.style.top = '90px';
        stickyDiv.style.right = 'var(--padding-left)';
        stickyDiv.style.zIndex = '-1';
    }
}

function addSticky(stickyDiv) {
    stickyDiv.classList.add('sticky');
    isSticky(stickyDiv);
}

function removeSticky(stickyDiv) {
    stickyDiv.classList.remove('sticky');
    stickyDiv.style.removeProperty('position');
    stickyDiv.style.removeProperty('top');
    stickyDiv.style.removeProperty('right');
}


scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});