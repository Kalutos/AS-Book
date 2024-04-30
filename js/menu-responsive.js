document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('#menu-toggle');
    var navMenu = document.querySelector('.menu-container');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
