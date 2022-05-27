const sectionAzul = document.querySelector('.js-azul');
const stickyAzul = document.querySelector('.js-image_azul');
const sectionCalls = document.querySelector('.js-calls');
const stickyCalls = document.querySelector('.js-image_calls');
const sectionMsm = document.querySelector('.js-msm');
const stickyMsm = document.querySelector('.js-image_msm');
const body = document.querySelector('.js-body');
const menuIcon = document.querySelector('.menu-icon');
const menuIconActive = document.querySelector('.menu-icon-active');
const nav = document.querySelector('nav');
const navActive = document.querySelector('.nav-active');
const normalwrap = document.querySelector('.normalwrap');
let menuToggled = false;


console.log(window.scrollY);
body.style.backgroundColor = 'var(--background)';


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

body.addEventListener('scroll', function () {

    console.clear();
    console.log(body.scrollTop);

    if (body.scrollTop >= 750) {
        addSticky(stickyAzul);
        body.style.backgroundColor = '#ff000015';
    }

    else if (body.scrollTop <= 750) {
        removeSticky(stickyAzul);
        body.style.backgroundColor = 'var(--background)';
    }

    if (body.scrollTop >= 1850) {
        addSticky(stickyCalls);
        body.style.backgroundColor = '#0000001a';
    }

    else if (body.scrollTop <= 2950) {
        removeSticky(stickyCalls);
    }

    if (body.scrollTop >= 2950) {
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
