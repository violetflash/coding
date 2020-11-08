//amount or quantity
let amountButtons = document.querySelectorAll('.amount__button');
if (amountButtons.length > 0) {
    for (let i = 0; i < amountButtons.length; i++) {
        const amountButton = amountButtons[i];
        amountButton.addEventListener('click', function(e) {
            let value = parseInt(amountButton.closest('.amount').querySelector('input').value)
            if (amountButton.classList.contains('amount__button--plus')) {
                value ++;
            } else {
                value = value - 1;
                if (value < 1) {
                    value = 1
                }
            }
            amountButton.closest('.amount').querySelector('input').value = value;
        });
    }
}

//TABS
let tabs = document.querySelectorAll('._tabs');
for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    let tabs_items = tab.querySelectorAll('._tabs-item');
    let tabs_content = tab.querySelectorAll('._tabs-content');
    for (let i = 0; i < tabs_items.length; i++) {
        let tabs_item = tabs_items[i];
        tabs_item.addEventListener('click', function (e) {
            for (let i = 0; i < tabs_items.length; i++) {
                let tabs_item = tabs_items[i];
                tabs_item.classList.remove('_active');
                tabs_content[i].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_content[i].classList.add('_active');
            e.preventDefault();
        });
    }
}

//PAGINATION
if (document.querySelector('.pagination')) {

    //remove and make active on click
    let pagLinks = document.querySelectorAll('.pagination__item');

    for (let i = 0; i < pagLinks.length; i++) {
        const pagLink = pagLinks[i];

        pagLink.addEventListener('click', function(e) {
            e.preventDefault();
            for (let i = 0; i < pagLinks.length; i++) {
                pagLinks[i].classList.remove('_active');
            }
            pagLink.classList.add('_active');
        });
    }

}

//LIST/GRID
if (document.querySelector('.catalog')) {

    //List / Grid switch
    let grid = document.querySelector('.catalog__grid');
    let list = document.querySelector('.catalog__list');
    let products = document.querySelectorAll('.catalog__products .product');

    grid.addEventListener('click', function(e) {
        list.classList.remove('active');
        grid.classList.add('active');
        for (let i = 0; i < products.length; i++) {
            products[i].classList.remove('list');
        }
    });

    list.addEventListener('click', function(e) {
        grid.classList.remove('active');
        list.classList.add('active');
        for (let i = 0; i < products.length; i++) {
            products[i].classList.add('list');
        }
    });
}

//SPOILER
let sectionSpoilers = document.querySelectorAll('.spoiler');
if (sectionSpoilers.length > 0) {

    for (let i = 0; i < sectionSpoilers.length; i++) {
        let sectionSpoiler = sectionSpoilers[i]

        sectionSpoiler.addEventListener('click', function (e) {
            sectionSpoiler.classList.toggle('active');
            _slideToggle(sectionSpoiler.nextElementSibling);
        });
    }
}

//RESET CHECKBOXES
//Вначале сделать проверку на наличие общего родителя чекбоксов
let filterReset = document.querySelector('.filter__button--reset');
filterCheckboxes = document.querySelectorAll('.filter .checkbox__input');

filterReset.addEventListener("click", function (e) {

    for (let index = 0; index < filterCheckboxes.length; index++) {
        filterCheckboxes[index].checked = false;
    }
});