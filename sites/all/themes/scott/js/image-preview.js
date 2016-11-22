(function($){

$(document).ready(function(){
$('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').on('click' , function(e){
   var mywidth =  $('.view-thumbnail-gallery .views-row .views-field-field-image img')[0].getBoundingClientRect().height;
   $('.button-wrapper').css({"top":mywidth /1.6});
  // $('.owl-buttons').css({"top": mywidth /2});
  e.preventDefault();
    if ($(this).siblings('.slide-container').hasClass('open')){
    $(this).siblings('.slide-container').removeClass('open');
   $(this).parent('.views-row').css({"background" : "none"}).siblings().css({"background" : "none"});
  }  else {
  $(this).parent('.views-row').css({"background" : "rgba(137,224,224,1)"}).siblings().css({"background" : "none"});
    $(this).siblings('.slide-container').toggleClass('open').parent().siblings().children().removeClass('open');
    $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -54},2);  
  } 
  if ($(this).siblings('.slide-container').hasClass('open')){
  $(this).parents('ul').addClass('shrink').css({"margin-bottom":windowH /2 +54});
  //$(this).parent('.views-row').siblings().css({'height': eqheight });
  } else {
  $(this).parents('ul').removeClass('shrink').css({"margin-bottom":"0"});
}
});
var windowH = $(window).height();
var winh = $('.single_page_wrapper').height();
var headerheight = $('#header').height();

  $(document).ready(function(e){
      $('.views-field-body , .views-field-field-slider-image .field-content, .open').css({'max-height': winh /2});
  });



//var eqheight = $('.view-thumbnail-gallery .views-row .views-field-field-image img').width();
 // $(window).resize(function(){
   // $('.view-thumbnail-gallery .view-content .item-list  .views-row').css({'height': eqheight });
  
  //});

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
     $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row').css({"border" : "none"});  
  }
  //if (direction == 'forward') {
    // do something else
  //}
});

$(document).keyup(function(event) {
    if(event.which === 27) {
      $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
      $('.open').removeClass('open');
      $('.view-thumbnail-gallery .view-content .views-row').css({"border" : "none"});  
    }
});
$('.button').on('click', function(e){
  e.preventDefault();
       $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row').css({"border" : "none"});  

});
$(function(){
  var windowHH = $(window).height() ;
      $('.owl-wrapper-outer').css({"height":windowHH /2 -20});
      $('.owl-wrapper').css({"height":windowHH /2 -20});
      $('.views-field-body').css({"top": windowHH /1.6});
      $('#header').css({"top": windowHH});
});



  
});
})(jQuery);