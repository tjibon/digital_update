(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {

        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        $('.testimonial-carousel').owlCarousel({
           
            items: 1,
            autoplay: false,
            margin:30,
            loop: true,
             dots:true,
        });
        $('.logo-carousel').owlCarousel({
           
            items: 6,
            autoplay: false,
            margin:20,
            loop: true,
             dots:false,
             nav:false,
             responsiveClass:true,
             responsive:{
                 0:{
                     items:2,
                     nav:false
                 },
                 600:{
                     items:4,
                     nav:false
                 },
                 1000:{
                     items:6,
                     nav:false,
                     loop:false
                 }
             }
            
        })


    });
  

    
    
  

    

}(jQuery));