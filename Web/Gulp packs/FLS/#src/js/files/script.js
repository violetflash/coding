let burgerHeader = document.querySelector('.menu__icon');

let burgerHeaderMenu = document.querySelector('.menu__body');

let body = document.querySelector('body');

burgerHeader.addEventListener("click", function (e) {
    burgerHeader.classList.toggle('_active');
    burgerHeaderMenu.classList.toggle('_active');
    body.classList.toggle('lock');
});


let burgerCatalog = document.querySelector('.catalog-menu__burger');
let burgerCatalogBody = document.querySelector('.catalog-menu__body');

burgerCatalog.addEventListener("click", function (e) {
    burgerCatalog.classList.toggle('_active');
    _slideToggle(burgerCatalogBody);
});


let menuParents = document.querySelectorAll('.catalog-menu__parent');

let submenuItems = document.querySelectorAll('.submenu__item');

for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("mouseenter", function (e) {
        menuParent.classList.add('active')
    });

    menuParent.addEventListener("mouseleave", function (e) {
        menuParent.classList.remove('active')
    });
}