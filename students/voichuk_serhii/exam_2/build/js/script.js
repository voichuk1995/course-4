/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!*********************************!*\
  !*** ./src/js/header_swiper.js ***!
  \*********************************/

}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination"
  }
});
$(document).ready(function () {
  $('.mySlick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    dotsClass: 'slick-dots'
  });
});
var delText = document.querySelectorAll(".slick-dots li button");
delText.innerText = "";
}();
/******/ })()
;
//# sourceMappingURL=script.js.map