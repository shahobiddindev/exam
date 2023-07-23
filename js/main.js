$('.owl-dishes').owlCarousel({
   dots:false,
   loop:true,
   margin:10,
   navText: ['<span><i class="bi bi-chevron-left"></i></span>', '<span><i class="bi bi-chevron-right"></i></span>'],
   nav:true,
   autoplay:true,
   autoplayTimeout:1500,
   autoplayHoverPause:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },
       860:{
           items:3
       },
       1000:{
           items:4
       }
   }
})

$('.owl-carousel1').owlCarousel({
   dots:false,
   loop:true,
   margin:10,
   navText: ['<span><i class="bi bi-chevron-left"></i></span>', '<span><i class="bi bi-chevron-right"></i></span>'],
   nav:true,
   autoplay:true,
   autoplayTimeout:1500,
   autoplayHoverPause:true,
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


$('.owl-carousel').owlCarousel({
   dots:false,
   loop:true,
   margin:10,
   navText: ['<span><i class="bi bi-chevron-left"></i></span>', '<span><i class="bi bi-chevron-right"></i></span>'],
   nav:true,    
   autoplay:true,
   autoplayTimeout:2000,
   autoplayHoverPause:true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },
       1000:{
           items:4.6
       }
   }
})

window.addEventListener("scroll", function () {
   toggleBacktop();
 });
 
 let backtop = document.getElementById("backtop");
 
 function toggleBacktop() {
   if (
     document.body.scrollTop > 200 ||
     document.documentElement.scrollTop > 200
   ) {
     backtop.style.bottom = "50px";
   } else {
     backtop.style.bottom = "-50px";
   }
 }
 

 const loading = document.getElementById("loading");
 
 setTimeout(() => {
   loading.classList.add("loading-none");
 }, 1000);