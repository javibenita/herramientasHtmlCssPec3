import Carousel from 'simple-carousel-js';
const img = [];
const carouselImgs = document.querySelectorAll("img.carousel-img");
carouselImgs.forEach((elem) => {
    img.push(elem.src)
});
initCarousel();
 
addEventListener("resize", (event) => {
    initCarousel();
});

function initCarousel(){
    if (img.length>0){
        let carousel = new Carousel(img, {
            width: '100%',
            height: '600px',
            element: '.carousel'
        });
    }
    /*let carousel = new Carousel(img, {
        // default options
        width: '100%', // px、rem ...
        height: '600px',
        element: '.carousel', // use document.querySelector(selector)
        duration: 1, // animation duration
        tween: 'Quart.easeOut', 
        pagination: true, // show pagination
        arrowButton: true, // show prev and next button
        momentum: 1, // turn to next page in a smaller number
        autoplay: true,
        autoplayDelay: 5,
        preventDefault: false,
        scale: false, // it's occurs when dragging
        // custom class name，string or string array
        customStyles: {
            imgClass: '',
            paginationClass: '',
            dotClass: '',
            prevButtonClass: '',
            nextButtonClass: '',
        },
    });*/
}

// destroy,remove carousel html and event
//carousel.destroy()