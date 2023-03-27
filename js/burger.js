const BODY = document.body;
const burgerBtn = document.getElementById('burger-button');
const headerNav = document.getElementById('header-nav');
const headerLinks = document.querySelectorAll('.header__link');
const headerLink = document.querySelectorAll("header__link");

burgerBtn.addEventListener('click', function() {
    headerNav.classList.toggle('header__nav_open');
    burgerBtn.classList.toggle('burger__button_open');
    BODY.classList.add('block');
});

headerNav.addEventListener('click', function(event) {
    if (event.target.classList.contains('header__link')) {
        headerNav.classList.remove("header__nav_open");
        burgerBtn.classList.remove("burger__button_open");
        BODY.classList.remove('block');
    }
});