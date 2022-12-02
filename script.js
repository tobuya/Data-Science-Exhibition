const container = document.querySelector('body');
const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('#hamburger');
const closeIcon = document.querySelector('#close-icon');

function displayMobileMenu() {
    container.id = 'menu-container';
    mobileMenu.id = 'show-menu';
}

hamburger.addEventListener('click', displayMobileMenu);

closeIcon.addEventListener('click', () => {
    window.location.reload(true);
});
