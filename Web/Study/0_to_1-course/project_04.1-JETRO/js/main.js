$(function () {

    $('.slider-top__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-bottom__inner',
        adaptiveHeight: true,
    });

    $('.slider-bottom__inner').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider-top__inner',
        // variableWidth: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    // variableWidth: false,
                    adaptiveHeight: true,

                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    });

    $slickSlider.find(".slick-slide").height("auto");
    $slickSlider.slickSetOption(null, null, true);

    $('.nav__btn-menu').on('click', function () {
        $('.nav__list').slideToggle();
    });

});