function myScroll(){

    window.addEventListener('scroll', function() {
        const scrolltop = scrollY;
        
        const header = document.querySelector('.header');
        const arrowTop = document.querySelector('.footer__go-top');

        if(scrolltop >= 370){
            header.classList.add('hide');
        }else{    
            header.classList.remove('hide');
        };

        if(scrolltop >= 22){
            arrowTop.classList.add('hide-arrow');
        }else{    
            arrowTop.classList.remove('hide-arrow');
        };
    });

}

export default myScroll;
