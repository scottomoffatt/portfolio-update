(function($){

$(document).ready(function(){
$('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').on('click' , function(e){
   var mywidth =  $('.view-thumbnail-gallery .views-row .views-field-field-image img')[0].getBoundingClientRect().width;
   var widthstart = $('.view-thumbnail-gallery .views-row .views-field-field-image img').width();
   //var slideheight =  $('.slide-container').offset().top;
  // $('.button-wrapper').css({"top":slideheight});

  // $('.owl-buttons').css({"top": mywidth /2});
  e.preventDefault();
    if ($(this).siblings('.slide-container').hasClass('open')){
    $(this).siblings('.slide-container').removeClass('open');
   $(this).parent('.views-row').css({"background" : "none","height" : "auto"}).siblings().css({"background" : "none"});
  }  else {
  $(this).parent('.views-row').css({"background" : "rgba(255,219,31,1)","height" : widthstart}).siblings().css({"background" : "none","height" : "auto"});
    $(this).siblings('.slide-container').toggleClass('open').parent().siblings('.views-row').children('.slide-container').removeClass('open');
    $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -54},2);  
  } 
  if ($(this).siblings('.slide-container').hasClass('open')){
  $(this).parents('ul').addClass('shrink').css({"margin-bottom":windowH });
  } else {
  $(this).parents('ul').removeClass('shrink').css({"margin-bottom":"0"});
}
});
var windowH = $(window).height();
var winh = $('.single_page_wrapper').height();
var headerheight = $('#header').height();

  $(document).ready(function(e){
      $('.views-field-body , .views-field-field-slider-image .field-content, .open').css({'max-height': winh});
  });


$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
     $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"background" : "none","height" : "auto"});  
  }
});
$(document).keyup(function(event) {
    if(event.which === 27) {
      $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
      $('.open').removeClass('open');
      $('.view-thumbnail-gallery .view-content .views-row ').css({"background" : "none","height" : "auto"});  
    }
});
$('.button').on('click', function(e){
  e.preventDefault();
       $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"background" : "none","height" : "auto"});  

});
$(function(){
  var windowHH = $(window).height() ;
      $('.owl-wrapper-outer').css({"height":windowHH });
      $('.owl-wrapper').css({"height":windowHH /1.6});
      $('.views-field-title').css({"top": windowHH /1.2 +18});
      $('.views-field-body').css({"top": windowHH /1.2 +36+18});
      $('#header').css({"top": windowHH /1.6});
      $('.owl-controls').css({"top": windowHH /5});
});


  
});
})(jQuery);