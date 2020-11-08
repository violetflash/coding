// TABS
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

//FILTER-TABS
let tabsFilter = document.querySelectorAll('.filter');
for (let i = 0; i < tabsFilter.length; i++) {
    let tabFilter = tabsFilter[i];
    let tabs_items = tabFilter.querySelectorAll('.filter__tab');
    let tabs_content = tabFilter.querySelectorAll('.filter__tab-content');
    let auto = document.querySelector('._auto');
    let tabSlider = document.querySelector('.filter__tab-slider');
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
            if (auto.classList.contains('_active')) {
                tabSlider.classList.remove('_active')
            } else {
                tabSlider.classList.add('_active')
            }
        });
    }
}


//Also working tabs code
// let tabs = document.querySelectorAll('._tabs')
// let btns = tabs.querySelectorAll('._tabs-item')
// let items = tabs.querySelectorAll('._tabs-content')
//
// function change(arr, i) {
//     arr.forEach( item => {
//         item.forEach( i => {i.classList.remove('_active')})
//         item[i].classList.add('_active')
//     })
// }
//
// for(let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', () => {
//         change([btns, items], i)
//     })
// }


