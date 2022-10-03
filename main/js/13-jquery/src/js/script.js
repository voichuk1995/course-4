import $ from 'jquery';
import 'slick-carousel';

window.$ = $;

const menu = $('#menu');

// $(document.body).append('<div>fgfg</div>').css({
//     'background-color': 'red',
//     fontSize: '19px',
// }).prepend($('<h1>').text('tetetetetg'));

$('a').css('color', 'red');

const h2 = $('h2');

h2.addClass('active');
h2.removeClass('active');
h2.toggleClass('active', true);
console.log(h2.hasClass('active'));

console.log(h2.attr('class'));
h2.eq(0).attr('title', '111');

h2.text('asdfdasf');
h2.html('<a href="#">sdfsd</a>');
h2.empty();

console.log(menu.find('.menu__item > a > span'));

$('.ok').on('click.test', function (e) {
    console.log(e);
});

$('.ok').on('click', function (e) {
    //$(window).scrollTop(0);
    // menu.slideToggle(5000, function () {
    //     console.log($(this))
    // });

    $('html, body').animate({
        scrollTop: 0
    }, 500, function () {
        console.log(this);
    });
});
let isStiky = false;

// $(window).on('scroll', function () {
//     if ($(this).scrollTop() > 300 && !isStiky) {
//         menu.css({
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             "background-color": '#fff'
//         });
//         isStiky = true;
//     } else if ($(this).scrollTop() < 300 && isStiky) {
//         menu.css({
//             position: 'static'
//         });
//         isStiky = false;
//     }
// });

$('.ok').off('.test');

$('.slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true
});

$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log(event, slick, currentSlide, nextSlide);
});
