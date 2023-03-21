const BODY = document.body;
const burgerBtn = document.getElementById('burger-button');
const headerNav = document.getElementById('header-nav');
const headerLinks = document.querySelectorAll('.header__link');

burgerBtn.addEventListener('click', function() {
    headerNav.classList.toggle('header__nav_open');
    burgerBtn.classList.toggle('burger__button_open');
});

if (headerNav.classList.contains('header__nav_open')) {
    headerNav.addEventListener('click', function(event) {
        headerNav.classList.remove("header__nav_open");
        burgerBtn.classList.remove("burger__button_open");
    });
}