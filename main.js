// samo vizivaywaysa funktion
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