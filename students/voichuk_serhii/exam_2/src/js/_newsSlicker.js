function newsSlicker(){
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
}

export default newsSlicker;
