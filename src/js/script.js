$(document).ready(function () {

    if (($(window).width()) > 1023) {
        Lightbox.init();
    }

    $('.menu-responsivo').click(function () {
        $('.menu').slideToggle();
        $('.container-submenu').slideUp();
    });

    $('.search-button-mobile').click(function () {
        $('.search-area input[type=text]').slideToggle();
    });

    if (($(window).width()) <= 1023) {

        $('.menu-item').click(function () {
            $(this).children('.container-submenu').stop().slideToggle();
            $(this).siblings().children('.container-submenu').stop().slideUp();
        });
    }

    $('.seu-nome').blur(function () {
        $(this).css('border', '1px solid #ffffff');
    });

    $('.seu-email').blur(function () {
        $(this).css('border', '1px solid #ffffff');
    });

    $('.banner-carousel').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.product-carousel').slick({
        dots: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
            }
        }]
    });

});