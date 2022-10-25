function burger(){
    const burger = document.querySelector(".burger");
    const burgerLine = document.querySelector(".burger__line");
    const menuList = document.querySelector(".menu__list");
    const menuLink = document.querySelectorAll(".menu__link");

    burger.addEventListener("click", function(){
        
        burgerLine.classList.toggle("open-burger");
        menuList.classList.toggle("open-menu");
    });    

    for (const linkMenu of menuLink) {
        linkMenu.addEventListener('click', function() {
            burgerLine.classList.remove("open-burger");
            menuList.classList.remove("open-menu");
        });
      }

};

export default burger;
