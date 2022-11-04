function gallery(){
    const lightbox = GLightbox({
        selector: ".glightbox",
        loop: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
        cssEfects: {
            fade: { in: 'fadeIn', out: 'fadeOut' },
            zoom: { in: 'zoomIn', out: 'zoomOut' }
        }

    });
};


function seeMoreButton(){
    const buttonSeeMore = document.querySelector(".see-more");
    const galeryBoxBoottom = document.querySelector(".gallery-box__bottom");

    buttonSeeMore.addEventListener("click", function(e){
        e.preventDefault();
        galeryBoxBoottom.classList.add("open");
        this.classList.add("hidden");
    });

}


export {gallery, seeMoreButton};
