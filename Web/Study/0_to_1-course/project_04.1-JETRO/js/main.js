$(function () {

    $('.slider-top__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-bottom__inner'
    });

    $('.slider-bottom__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-top__inner',
        variableWidth: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,

    })

});