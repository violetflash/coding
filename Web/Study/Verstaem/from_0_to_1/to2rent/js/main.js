$(function () {

    // - реинициализация слайдера, если сразу не заработал.
    // $(".slider").slick('reinit');
    $('.slider').slick({
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,

    });
});

