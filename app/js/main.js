$(function () {

    $('.faq__caption').on('click', function () {
        $(this).next('.faq__wrapper').slideToggle();
        $(this).toggleClass('faq__caption--active');
    });

    $('.team__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });

});