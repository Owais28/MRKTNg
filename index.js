const menuToggleButton = document.querySelector('#menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.body;
menuToggleButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('show');
})


window.addEventListener('resize', function() {
    if (window.innerWidth >= 475) {
        mobileMenu.style.display = 'none';
        menuToggleButton.style.display = 'none';
        console.log("Screen is greater than 475px");
        // console.clear()
    } else {
        mobileMenu.style.display = 'block';
        menuToggleButton.style.display = 'block';
        console.log("Screen is smaller than 475px");
        // console.clear()
    }
})