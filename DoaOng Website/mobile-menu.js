document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu');
    const menu = document.querySelector('.menu');
    const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
    });
});