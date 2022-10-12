const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});





$(document).ready(function(){
  
  $('.mySlick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    dotsClass: 'slick-dots',
  });

});

const delText = document.querySelectorAll(".slick-dots li button");

delText.innerText = "";
