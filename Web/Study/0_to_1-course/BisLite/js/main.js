$(function () {

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.works__inner').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/ico/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/ico/slide-right.svg" alt=""></button>',
        variableWidth: true,
    });

    $('.header__menu-btn').on('click', function () {
        $('.nav__list').slideToggle();
    })

});




