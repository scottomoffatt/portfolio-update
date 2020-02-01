(function($){

$(document).ready(function(){
 var theWindow = $(window);
var winHeight = theWindow.height();
var animDuration = winHeight / 2;
var animData = {
        container: document.getElementById('full-bg'),
        renderer: 'canvas',
        loop: false,
        autoplay: true,
        prerender: true,
        path: 'sites/all/themes/scott/js/data_2.json'
    };
var anim = bodymovin.loadAnimation(animData);
anim.playSegments([[1,19] , [19,1]], true);
$( window ).scroll(function() {
  animatebodymovin(animDuration, anim);
});

function animatebodymovin(duration, animObject) {

  var scrollPosition = theWindow.scrollTop();
  var maxFrames = animObject.totalFrames;
  var frame = (maxFrames / 19) * (scrollPosition / (duration / 19));
  animObject.goToAndStop(frame, true);
}


$('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').on('click' , function(e){
  var mywidth =  $('.view-thumbnail-gallery .views-row .views-field-field-image img')[0].getBoundingClientRect().width;
  var widthstart = $('.view-thumbnail-gallery .views-row .views-field-field-image img').width();
  var imgst = $('.field-content').height();
  var totalHeight= 0;
  $(this).parents('body').addClass('prevent-scroll');
    $(this).parent().find('.specimens').each(function(){
      totalHeight = totalHeight + $(this).outerHeight(true);
    });
  e.preventDefault();
    if ($(this).siblings('.slide-container').hasClass('open')){
   $(this).parent('.views-row').css({"height" : "auto"});

  }  else {
  $(this).parent('.views-row').css({"height" : windowH}).siblings().css({"height" : "auto"});
    $(this).siblings('.slide-container').toggleClass('open').parent().siblings('.views-row').children('.slide-container').removeClass('open');
    $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -3},500);
    $(this).find('.desc').css({"height":firstslide });
    $(this).parents('#page').children('#header').css({"z-index":"0"});
  }
  if ($(this).siblings('.slide-container').hasClass('open')){
      $(this).parents('.views-row').find('.button-wrapper').css({"top" : " 13.5rem"});
      $(this).parents('ul').addClass('shrink').css({"margin-bottom": "100vh"});

  } else {
  $(this).parents('ul').removeClass('shrink').css({"margin-bottom":"0"});
  $(this).parents('.views-row').find('.button-wrapper').css({"top" : " "});
}
});
var windowH = $(window).height();

var winh = $('.single_page_wrapper').height();
var firstslide = $('.view-thumbnail-gallery .view-content .views-row .owl-wrapper .owl-item:first-child').height();
  $(".views-field-field-slider-image").each(function(){
  $(this).find('.img-cont').attr("id", "img-cont").addClass("vis");
});


 /* $(document).ready(function(e){
      $('.views-field-body , .views-field-field-slider-image .field-content, .open').css({'max-height': winh});
  });*/


$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
     $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
     $(this).parents('body').removeClass('prevent-scroll');
  }
});
$(document).keyup(function(event) {
    if(event.which === 27) {
      $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
      $('.open').removeClass('open');
      $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
      $(this).parents('body').removeClass('prevent-scroll');
    }
});
$('.button').on('click', function(e){
  e.preventDefault();
       $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
       //$(this).parents('body').toggleClass('prevent-scroll');
       $(this).parents('#page').children('#header').css({"z-index":"10"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
          $(this).parents('body').removeClass('prevent-scroll');
     $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -36},500);

});


$(window).scroll(function(){
  var away = $("#full-bg");
  var windowpos = $(window).scrollTop();
  if (windowpos >=900 ){
     $('#full-bg canvas').css({"display":"none"});
  } else{
    $('#full-bg canvas').css({"display":"block"});
  }
});
/*$(document).ready(function(){
  $('.page-taxonomy .field-items a, .field-content a, .views-field .views-field-field-slider-image a, .field-name-field-slider-image a, .field-type-image a').featherlightGallery();
});*/

var colors = ["#99E079","#7CEFD1","#FF7572","#2952C4","#FFC260","#AAAAFF","#4EB0CE"];
  var i = 0;
  $('.view-thumbnail-gallery .view-content .views-row').each(function(){
    $(this).css("background-color", colors[i]);
    i = (i + 1) % colors.length;
  });
  $('.paragraphs-item-project-title').each(function(){
    $(this).css("color", colors[i]);
    $(this).children('h1').css("color" , colors[i]);
    i = (i + 1) % colors.length;
  });

$(function(){
  var windowHH = $(window).height();
  var headerheight = $('#header').height();
  var baseHeight = $('.views-field .views-field-title h3').height();
  var topHeight = $('.view-thumbnail-gallery .view-content .views-row').height();
  var bottomH = $(windowHH - topHeight/2.5);

      $('.owl-wrapper-outer').css({"height":"auto" });
      $('.owl-wrapper').css({"height":"auto"});
      //$('.views-field-title').css({"top": bottomH });
      //$('.views-field-body').css({"top": bottomH +18 });
/*      $('#header').css({"top": windowHH /1.6});*/
      $('.owl-prev , .owl-next').css({"top": windowHH /4});

});



// Initialize library to lazy load images
 const observer = lozad(".lozad", {
   rootMargin: "60px 0px", // syntax similar to that of CSS Margin
   loaded: function(el) {
     // Custom implementation on a loaded element
     el.classList.add("fade-up");
   }
 });
 observer.observe();









});
})(jQuery);
