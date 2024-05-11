$(function () {

    let button = $('#button-up');

    $(window).scroll (function () {
        if ($(this).scrollTop() > 300) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });
    button.on('click', function() {
        $('body,html').animate({ scrollTop: 0 }, 1000);
        return false;
    });
});

$('.nav a').on('click', function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
});

$('.nav__btn').on('click', function () {
    $('.header__top').toggleClass('header__top--active');
});

$('.faq__caption').on('click', function () {
    $(this).next('.faq__wrapper').slideToggle();
    $(this).toggleClass('faq__caption--active');
});

$('.team__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1201,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 851,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});