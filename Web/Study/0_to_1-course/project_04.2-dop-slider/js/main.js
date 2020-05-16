$(function () {
    var mySwiper= new Swiper('.swiper1', {
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        keyboard: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var mySwiper= new Swiper('.swiper2', {
        // containerModifierClass: 'swiper-container-insta',
        // slideClass: 'instagram__slider-slide',
        // wrapperClass: 'instagram__slider-wrapper',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect : {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        keyboard: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },


    });


});



// function resizeSwiper() {
//     $('.swiper-container').height($('.swiper-slide img').height())
// }
// $('.swiper-container').each(function(){
//     // Hero swiper
//     var mySwiper = new Swiper ('.swiper-container', {
//         direction: 'horizontal',
//         loop: true,
//         effect: 'slide',
//         autoplay: {
//             delay: 3000,
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//             clickable: true,
//         },
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         grabCursor: true,
//         keyboardControl: true,
//         speed: 1000,
//         slidesPerView:1,
//         onImagesReady: function (swiper) {
//             resizeSwiper();
//             swiper.onResize();
//         }
//     });
// });
// $(window).resize(function(){
//     resizeSwiper()
// });