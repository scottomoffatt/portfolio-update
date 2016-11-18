(function($){

$(document).ready(function(){
$('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').on('click' , function(e){
   var mywidth =  $('.view-thumbnail-gallery .views-row .views-field-field-image img')[0].getBoundingClientRect().width;
   $('.button-wrapper').css({"top":"45%" });
  // $('.owl-buttons').css({"top": mywidth /2});
  e.preventDefault();
    if ($(this).siblings('.slide-container').hasClass('open')){
    $(this).siblings('.slide-container').removeClass('open');
   $(this).parent('.views-row').css({"border" : "none"}).siblings().css({"border" : "none"});
  }  else {
  $(this).parent('.views-row').css({"border" : "solid 2px rgba(137,224,224,1)", "height" : mywidth}).siblings().css({"border" : "none"});
    $(this).siblings('.slide-container').toggleClass('open').parent().siblings().children().removeClass('open');
    $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -54},2);  
  } 
  if ($(this).siblings('.slide-container').hasClass('open')){
  $(this).parents('ul').addClass('shrink').css({"margin-bottom":windowH});
  //$(this).parent('.views-row').siblings().css({'height': eqheight });
  } else {
  $(this).parents('ul').removeClass('shrink').css({"margin-bottom":"0"});
}
});
var windowH = $(window).height();
var winh = $('.single_page_wrapper').height();
var headerheight = $('#header').height();

  $(document).ready(function(e){
      $('.views-field-body , .views-field-field-slider-image .field-content, .open').css({'max-height': winh });
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
      $('.views-field-body').css({"top": windowHH /1.7});
      $('#header').css({"top": windowHH});
});




  
});
})(jQuery);