(function($){

$(document).ready(function(){
$('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').on('click' , function(e){
  e.preventDefault();
    if ($(this).siblings('.slide-container').hasClass('open')){
    $(this).siblings('.slide-container').removeClass('open');
   $(this).parent('.views-row').css({"border" : "none"}).siblings().css({"border" : "none"});
  }  else {
  $(this).parent('.views-row').css({"border" : "solid 2px rgba(137,224,224,1)"}).siblings().css({"border" : "none"});
    $(this).siblings('.slide-container').toggleClass('open').parent().siblings().children().removeClass('open');
    $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -54},2);  
  } 
  if ($(this).siblings('.slide-container').hasClass('open')){
  $(this).parents('ul').addClass('shrink');
  } else {
  $(this).parents('ul').removeClass('shrink');
}
});




$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
     $('.shrink').removeClass('shrink');
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row').css({"border" : "none"});  
  }
  //if (direction == 'forward') {
    // do something else
  //}
});

$(document).keyup(function(event) {
    if(event.which === 27) {
      $('.shrink').removeClass('shrink');
      $('.open').removeClass('open');
      $('.view-thumbnail-gallery .view-content .views-row').css({"border" : "none"});  
    }
});
$('.button').on('click', function(e){
  e.preventDefault();
       $('.shrink').removeClass('shrink');
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row').css({"border" : "none"});  

});


  });

})(jQuery);