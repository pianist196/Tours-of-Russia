// Menu
const burger = document.querySelector('.burger-menu__button');
const menu = document.querySelector('.burger-menu');

burger.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('active');
});


// Scroll

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


// ArrowUp

document.querySelector('.arrowUp').onclick = function scrollUpFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () { scrollFunction() }

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.querySelector('.arrowUp').style.display = 'block';
    } else {
        document.querySelector('.arrowUp').style.display = 'none';
    }
}