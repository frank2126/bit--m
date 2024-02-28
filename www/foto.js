document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.querySelector('.menu-trigger');
    const menuItems = document.querySelector('.menu-items');

    menuTrigger.addEventListener('click', function () {
        menuItems.classList.toggle('show');
    });
});
