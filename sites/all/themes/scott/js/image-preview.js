(function($){

$(document).ready(function(){
$('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').on('click' , function(e){
  var mywidth =  $('.view-thumbnail-gallery .views-row .views-field-field-image img')[0].getBoundingClientRect().width;
  var widthstart = $('.view-thumbnail-gallery .views-row .views-field-field-image img').width();
  var imgst = $('.field-content').height();
  var totalHeight= 0;    
    $(this).parent().find('.specimens').each(function(){
      totalHeight = totalHeight + $(this).outerHeight(true);   
    });
  e.preventDefault();

    if ($(this).siblings('.slide-container').hasClass('open')){
    $(this).siblings('.slide-container').removeClass('open');
   $(this).parent('.views-row').css({"height" : "auto"});
   
  }  else {
  $(this).parent('.views-row').css({"height" : windowH}).siblings().css({"height" : "auto"});
    $(this).siblings('.slide-container').toggleClass('open').parent().siblings('.views-row').children('.slide-container').removeClass('open');
    $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -54},2);  
    $(this).find('.desc').css({"height":firstslide });


  } 
  if ($(this).siblings('.slide-container').hasClass('open')){
    $(this).parents('.views-row').find('.button-wrapper').css({"top" : " 13.5rem"});
  $(this).parents('ul').addClass('shrink').css({"margin-bottom": totalHeight });
  } else {
  $(this).parents('ul').removeClass('shrink').css({"margin-bottom":"0"});
  $(this).parents('.views-row').find('.button-wrapper').css({"top" : " "});
}
  if($(this).hasClass('open')){
    $(this).children()
  }

});
var windowH = $(window).height();

var winh = $('.single_page_wrapper').height();
var firstslide = $('.view-thumbnail-gallery .view-content .views-row .owl-wrapper .owl-item:first-child').height();
  $(".views-field-field-slider-image").each(function(){
  $(this).attr({"data-featherlight-gallery": "" , "data-featherlight-filter":"a"});
  $(this).find('.img-cont').attr("id", "img-cont")
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
  }
});
$(document).keyup(function(event) {
    if(event.which === 27) {
      $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
      $('.open').removeClass('open');
      $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});  
    }
});
$('.button').on('click', function(e){
  e.preventDefault();
       $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
     $('html,body').animate({scrollTop:$(this).parent().parent().offset().top -500},2);

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
      $('#header').css({"top": windowHH /1.6});
      $('.owl-prev , .owl-next').css({"top": windowHH /4});

});



 var count = 1;
   var player = document.getElementById('bgvid');
   var source_w = document.getElementById('source_w');
   var source_m = document.getElementById('source_m');
   player.addEventListener('ended',myHandler,false);

   function myHandler(e)
   {

      if(!e) 
      {
         e = window.event; 
      }
      count++;
      if (count === 3) {
    count = 1;
  }   

      $(source_w).attr('src', "http://www.scottomoffatt.com/sites/default/files/videos/headturn-02_"+count+".webm");
       $(source_m).attr('src', "http://www.scottomoffatt.com/sites/default/files/videos/headturn-02_"+count+".mp4");

      player.load();
      player.pause();
   }


  $(document).ready(function() {
            // Get media - with autoplay disabled (audio or video)
            var media = $('#bgvid').not("[autoplay='autoplay']");
            var tolerancePixel = 5;

            function checkMedia(){
                // Get current browser top and bottom
                var scrollTop = $(window).scrollTop() + tolerancePixel;
                var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

                media.each(function(index, el) {
                    var yTopMedia = $(this).offset().top;
                    var yBottomMedia = $(this).height() + yTopMedia;

                    if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ 
                        $(this).get(0).play();
                    } else {
                        $(this).get(0).pause();
                    }
                });

                
            }
            $(document).on('scroll', checkMedia);
        });



$('.img-cont').waypoint(function(direction) {
  $(this).addClass("vis");
}, {
  context: '.img-cont',
  offset:"90"
});
var vid = document.getElementById('bgvid')
$(window).resize(function(){
  var pageWidth = $(window).width();
  if ( $(window).width()< 1024){
    $('#bgvid').get(0).play();
  }
});


$("#page").on("touchstart",function(){
   detectTap = true;
  $("#bgvid").get(0).play();
});

  




});
})(jQuery);