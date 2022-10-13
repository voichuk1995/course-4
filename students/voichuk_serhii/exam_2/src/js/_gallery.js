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

export default gallery;
