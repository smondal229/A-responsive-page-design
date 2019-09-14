$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:20,
        autoWidth: true,
        nav: true,
        navText: ["<div class='left-button'><img src='assets/ChevronRight-512.png'></div>",
            "<div class='right-button'><img src='assets/ChevronRight-512.png'></div>"],
        dots: false,
        mouseDrag: true,
        responsiveClass: true,
        autoplay: 2000,
        responsive: {
            0: {
                center: true,
                autoWidth: false,
                items: 1
            },
            576: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


});