$(function () {

    $('.slider-top__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-bottom__inner'
    });

    $('.slider-bottom__inner').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider-top__inner',
        variableWidth: true,
        focusOnSelect: true,
        infinite: false,
    })

});