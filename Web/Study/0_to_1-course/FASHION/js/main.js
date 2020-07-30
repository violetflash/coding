$(function () {

    $('.continue-btn').on('mouseover', function () {
        $(this).parent().css({'box-shadow' : 'none'})
    })
    .on('mouseleave', function () {
        $(this).parent().css({'box-shadow' : '0 2px 6px rgba(0, 0, 0, 0.1)'})
    });

    var mySwiper= new Swiper('.swiper1', {
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        keyboard: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var mySwiper= new Swiper('.swiper2', {
        slidesPerView: 6,
        keyboard: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1366: {
                slidesPerView: 'auto',
            },
        },

    });

});
