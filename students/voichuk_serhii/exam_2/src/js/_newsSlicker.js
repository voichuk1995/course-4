function newsSlicker(){
    $(document).ready(function(){
  
        $('.mySlick').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          // autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                centerMode: true,
              },
            },
          ]
        });
      
    });
}

export default newsSlicker;
