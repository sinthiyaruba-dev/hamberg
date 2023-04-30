$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        dots:true,
        prevArrow:false,
        nextArrow:false,
      });
  })
  // nav scroll js
  $(window).scroll(function(){
    if($(window).scrollTop ()> 500){
      $('.menu').addClass('nav-scroll');
    }
    else{
      $('.menu').removeClass('nav-scroll');
    }
  })
  // top button js part
  $('.top-button').on("click",function(){
    $("html,body").animate({scrollTop:0},1000)
  })
  $(window).scroll(function(){
    var scroll=$(this).scrollTop();
    if(scroll>500){
      $('.top-button').fadeIn(500);
    }
    else{
      $('.top-button').fadeOut(500);
    }
  })
    // Preloader js part
setTimeout(function(){
  $('.preloader').fadeToggle();

},3000);

  // animation js part
  new WOW().init();
  // color-switcher part start
$(".white").click(function(){
  $(".color-switcher").toggleClass("slides");
});

$(".green").click(function(){
  $(".style").attr ("href","css/green.css");
});
$(".red").click(function(){
  $(".style").attr ("href","css/red.css");
});
$(".purple").click(function(){
  $(".style").attr ("href","css/purple.css");
});