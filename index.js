const menuToggleButton = document.querySelector('#menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuToggleButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
})