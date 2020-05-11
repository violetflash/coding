// $(function () {
//     //initialize swiper when document ready
//     var mySwiper= new Swiper('.swiper-container', {
//         // Optional parameters
//         autoHeight: true,
//         direction: 'vertical',
//         loop: true,
//         slidesPerView: 1,
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//         },
//     })
// });

function resizeSwiper() {
    $('.swiper-container').height($('.swiper-slide img').height())
}
$('.swiper-container').each(function(){
    // Hero swiper
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        effect: 'slide',
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        grabCursor: true,
        keyboardControl: true,
        speed: 1000,
        slidesPerView:1,
        onImagesReady: function (swiper) {
            resizeSwiper();
            swiper.onResize();
        }
    });
});
$(window).resize(function(){
    resizeSwiper()
});