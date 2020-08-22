$(function () {

    $('.test__tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.test__tab').removeClass('test__tab--active');
        $('.test__content').removeClass('test__content--active').hide();
        $(this).addClass('test__tab--active');
        $('#'+id).addClass('test__content--active').fadeIn()
    })
});