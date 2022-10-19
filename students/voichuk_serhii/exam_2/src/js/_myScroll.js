function myScroll(){

    window.addEventListener('scroll', function() {
        const scrollTop = scrollY;
        console.log(scrollTop);
        
        const header = document.querySelector('.header');
        
        if(scrollTop >= 650){
            header.classList.add('hide');
        }else{    
            header.classList.remove('hide');
        };



        const arrowTop = document.querySelector('.footer__go-top');

        if(scrollTop >= 22){
            arrowTop.classList.add('hide-arrow');
        }else{    
            arrowTop.classList.remove('hide-arrow');
        };


        // document.querySelectorAll('.forScroll').forEach((el, i) => {
        //     if(el.offsetTop - document.querySelector('.menu__list').clientHeight <= scrollTop){
        //         document.querySelectorAll('.menu__link').forEach((el) => {
        //             if(el.classList.contains('menu__link--active')){
        //                 el.classList.remove('menu__link--active')
        //             }
        //         })
        //     }

        //     document.querySelectorAll('.menu__link').classList.add('menu__link--active');
        // });

    });

};

export default myScroll;
