function newsSlicker(){
    $(document).ready(function(){
  
        $('.mySlick').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          dots: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: "30px",
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: "10px",
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "5px",
              },
            },
          ]
        });
      
    });
}

export default newsSlicker;
