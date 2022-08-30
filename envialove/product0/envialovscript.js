$(function(){
   
   $('.carousel-products-full').owlCarousel({
       loop: false,
       margin: 0,
       stagePadding: 0,
       responsiveClass:true,
       nav: true,
       navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
       responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:4
           }
       }
   })   
   
   $('.carousel-products-trio').owlCarousel({
       loop: false,
       margin: 0,
       stagePadding: 0,
       responsiveClass:true,
       nav: true,
       navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
       responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:3
           }
       }
   })   
   
   
});