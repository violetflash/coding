$(function () {
    $('.products__slider').slick({
        prevArrow: '<button class="products__slider-arrow arrow-left">' +
            '<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M9.21839 1L1 9L9.21839 17" stroke="white"/>' +
            '</svg></button>',
        nextArrow: '<button class="products__slider-arrow arrow-right">' +
            '<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M0.78161 17L9 9L0.78161 1" stroke="black"/>' +
            '</svg></button>',
        infinite: false,
        autoplay: true,
        speed: 2000,
    });

    $('.questions__title').on('click', function () {
        $('.questions__item').removeClass('questions__item--active');
        // $('.questions__text').removeClass('questions__text--active');
        $(this).parent().addClass('questions__item--active');
        // $(this).next('.questions__text').slideToggle('slow')
    });

    $('#fullpage').fullpage({
        autoScrolling:true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        sectionSelector: '.page-section',
    });


});