// samo vizivaywaysa funktion
/* header scroll */
(function () {
    const header = document.querySelector('header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header-scroll');

        } else {
            header.classList.remove('header-scroll');
        }
    };
}());

//burger
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav')
    const menuClose = document.querySelector('.header-nav-close')
    burgerItem.addEventListener('click', () =>  {
        menu.classList.add('header-nav-active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header-nav-active')
    });
}());