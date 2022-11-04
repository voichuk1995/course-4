function myScroll(){

    const menuLink = document.querySelectorAll(".menu__link");
    const sections = document.querySelectorAll("section");

    function activeMenu(){

        //MENU ACTIVE
        let length = sections.length;
        while(--length && window.scrollY + 141 < sections[length].offsetTop){};
        menuLink.forEach(el => el.classList.remove("menu__link--active"));
        menuLink[length].classList.add("menu__link--active");    
        
        
        //HEADER
        const scrollTop = scrollY;
        const header = document.querySelector('.header');
        if(scrollTop >= 650){
            header.classList.add('hide');
        }else{    
            header.classList.remove('hide');
        };

        //ARROW TOP
        const arrowTop = document.querySelector('.footer__go-top');
        if(scrollTop >= 22){
            arrowTop.classList.add('hide-arrow');
        }else{    
            arrowTop.classList.remove('hide-arrow');
        };

    };
    activeMenu();
    window.addEventListener("scroll", activeMenu);
};


export default myScroll;
