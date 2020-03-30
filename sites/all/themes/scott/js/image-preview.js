(function($){

$(document).ready(function(){

 var theWindow = $(window);
var winHeight = theWindow.height();
var animDuration = winHeight / 2;
var element =  document.getElementById('full-bg');
if (typeof(element) != 'undefined' && element != null)
{
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
}

function animatebodymovin(duration, animObject) {

  var scrollPosition = theWindow.scrollTop();
  var maxFrames = animObject.totalFrames;
  var frame = (maxFrames / 19) * (scrollPosition / (duration / 19));
  animObject.goToAndStop(frame, true);
}

 $('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').attr('id','mod/');


$('.view-thumbnail-gallery .view-content .views-row .views-field-field-image').on('click' , function(e){
  var mywidth =  $('.view-thumbnail-gallery .views-row .views-field-field-image img')[0].getBoundingClientRect().width;
  var widthstart = $('.view-thumbnail-gallery .views-row .views-field-field-image img').width();
  var imgst = $('.field-content').height();
  var totalHeight= 0;
  var thisoffset = $(this).parent().parent().offset()

  $(this).parents('body').addClass('prevent-scroll');


  $(this).parent().find('.specimens').each(function(){
      totalHeight = totalHeight + $(this).outerHeight(true);
    });
    e.preventDefault();
    window.location.hash = $(this).attr('id');

if ($(this).siblings('.slide-container').hasClass('open')){
    $(this).addClass("activate");
  }
  else {
  $(this).parent('.views-row').css({"height" : windowH}).siblings().css({"height" : " "});
    $(this).siblings('.slide-container').toggleClass('open').parent().siblings('.views-row').children('.slide-container').removeClass('open');
    $('html,body').animate({scrollTop:thisoffset.top -54},500);
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
$(window).on('hashchange' ,function (event){
  if(window.location.hash != "#mod/") {
    $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
    //$(this).parents('body').toggleClass('prevent-scroll');
    $('#header').css({"z-index":"10"});
  $('.open').removeClass('open');
  $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
  $('body').removeClass('prevent-scroll');
  //$('html,body').animate({scrollTop:$(this).parent().parent().offset().top },500);
          }

});

$(document).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
     $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
     $(this).parents('body').removeClass('prevent-scroll');
     window.location.hash = '';
  }

});

$(document).keyup(function(event) {
    if(event.which === 27) {
       $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
       $(this).parents('#page').children('#header').css({"z-index":"10"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
      $(this).parents('body').removeClass('prevent-scroll');
     //$('html,body').animate({scrollTop:thisoffset.top -54},500);
     window.location.hash = '';

    }
});
$('.button').on('click', function(e){
       $('.shrink').removeClass('shrink').css({"margin-bottom":"0"});
       //$(this).parents('body').toggleClass('prevent-scroll');
       $(this).parents('#page').children('#header').css({"z-index":"10"});
     $('.open').removeClass('open');
     $('.view-thumbnail-gallery .view-content .views-row ').css({"height" : "auto"});
      $(this).parents('body').removeClass('prevent-scroll');
     //$('html,body').animate({scrollTop:$(this).parent().parent().offset().top -54},500);
     //window.location.replace('#mod/');
     //var sub = window.location.hash.replace( '#', ' ');
      //window.location.hash = ' ';
      window.history.go(-1);
     //history.replaceState(null, null, '/');
});

$(".views-field-field-project-name").waypoint(function(direction) {
   if (direction ==='down') {
    $(this).css('top','-54px') ;

   }
   else if (direction ==='up'){
    $(this).css('top','0px') ;
  }
},{context: '.specimen-wrapper .field-content'});



$(window).scroll(function(){
  var away = $("#full-bg");
  var windowpos = $(window).scrollTop();
  if (windowpos >=900 ){
     $('#full-bg canvas').css({"display":"none"});
  } else{
    $('#full-bg canvas').css({"display":"block"});
  }
});


var $window = $(window);
    var $pane = $('.paragraphs-item-hero-showcase');
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 440) {
          var smallScreen = window.matchMedia("(max-width: 800px)");

        $('.specimen-wrapper .field-content').bind('scroll', function(){
          function show() {
            var wrap = $('.specimen-wrapper .field-content').offset().top;
            var inner = $('.paragraphs-item-project-title').offset().top;
                var init = $('.paragraphs-item-project-title').offset().top;
            $('.paragraphs-item-project-title, .paragraphs-item-hero-showcase').each(function(i, el){
              var w = $(this).width();
              var section = $(this);
              var from = $(this).scrollTop();
              var wraP = $('.specimen-wrapper .field-content').offset().top;
              var min = section.offset().top ;
              var top = (wrap - min) / 10;
              var dif = (windowsize/2) - top;
              var pos =  min;
              var matH = (100/w);

              var maxLeft = 40;
              var slow = (top );
              var fast = (top * 6)
             var x = $(this).children('.background-image-formatter').css('background-position-x');
                 if (window.matchMedia("(max-width: 800px)").matches && fast >= "-90") {
                  section.children('.background-image-formatter').css({"background-position-x":"90%"});
                  section.children().children().children('img').animate().css({"-webkit-transform":"translate(100%,100%",  "max-width":"300px"});
                  //section.children('.background-image-formatter').addClass('fade-left');
                //  section.children().children().addClass('fade-left');

                }
                else if ($(window).width() <= 800){
                 section.children('.background-image-formatter').css({"background-position-x": + (fast+200)  + "px" });
                  section.children('.background-image-formatter').css({"background-position-y": "110px"  });
                   section.children('.background-image-formatter').css({"background-size":"400px"});

                  section.children().children().children('img').css({"transform":"translate("+ "-" + (windowsize/15) + "px" + "," + (fast+200) + "px",  "max-width": + (windowsize/5) + "px"});
                  section.children().children().children('img').css({"-webkit-transform":"translate(100%,100%",  "max-width":"300px"});

                }
                else if (window.matchMedia("(min-width: 800px)").matches && fast >= "-200" ) {
                  section.children('.background-image-formatter').css({"background-position-x":"100%" });
                  section.children('.background-image-formatter').css({"background-size":"contain"});
                  section.children().children().children('img').css({"transform":"translate(800px," + (fast+700) + "%" });
                  section.children().children().children('img').css({"-webkit-transform":"translate(0%," + (fast+700) + "%" });

                }
                else if (window.matchMedia("(max-width: 680px)").matches){

                }
                else {
              section.children('.background-image-formatter').css({"background-position": + (fast+200)  + "%" , "background-size":"contain"});
                section.children('.background-image-formatter').css({"background-position-y": "110%"  });
                section.children().children().children('img').css({"transform":"translate(0%," + (fast+700) + "px" ,  "max-width":+ (windowsize/3) + "px"});

                }
              });
            }

    show();
    $(window).scroll(show);
});
}

}
// Execute on load
checkWidth();
// Bind event listener
var ts;
$('.specimen-wrapper .field-content').bind('touchstart', function(e) {
    ts = e.originalEvent.touches[0].clientY;
});
  $('.specimen-wrapper .field-content').bind('touchmove', function(e){
    $('.paragraphs-item-project-title, .paragraphs-item-hero-showcase').each(function(i, el){
      var w = $(this).width();
      var section = $(this);
    var te = e.originalEvent.changedTouches[0].clientY;
    var wrap = $('.specimen-wrapper .field-content').offset().top;
    var section = $(this);
    var from = $(this).scrollTop();
    var wraP = $('.specimen-wrapper .field-content').offset().top;
    var min = section.offset().top ;
    var top = (wrap - min) / 10;
    var slow = (top );
    var fast = (top * 6)
      $(window).resize(checkWidth);
      var windowsize2 = $(window).width();
      section.children('.background-image-formatter').css({"background-position":"0 0" });
      if (ts > te && fast >= "-90"){
        //$('.paragraphs-item-project-title').children('.background-image-formatter').addClass('fade-left');
        //$('.paragraphs-item-hero-showcase').children().children().addClass('fade-left');
      //  $('.paragraphs-item-project-title').children('.background-image-formatter').css({"background-position-x": + (fast+200)  + "px" });
      section.children('.background-image-formatter').css({"background-position-y": "40px "});
      section.children('.background-image-formatter').css({"background-position-x": (top+100)    });
        //$('.paragraphs-item-project-title').children('.background-image-formatter').css({"background-position-x":"90%"});
        //$('.paragraphs-item-hero-showcase').children().children().children('img').css({"transform":"translate(800px," + (fast+700) + "%" });
        $('.paragraphs-item-hero-showcase').children().children().children('img').addClass('fade-left');


      }
      else {
        section.children('.background-image-formatter').css({"background-position-y": "40px"  });
        section.children('.background-image-formatter').css({"background-position-x": (top+100)   });
        $('.paragraphs-item-hero-showcase').children().children().children('img').addClass('fade-left');

      }
    });
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
    $(this).css("background-color", colors[i]);
    $(this).children('h1').css("color" , "#ffffff");
    $(this).children('.background-image-formatter').css("background-color", colors[i]);
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
$('p').each(function(){
   var string = $(this).html();
   string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
   $(this).html(string);
 });
$('.node-type-case-study').find('p ,li, span').each(function(){
   var string = $(this).html();
   string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
   $(this).html(string);
 });
// Initialize library to lazy load images
 const observer = lozad(".lozad", {
   rootMargin: "500px 0px", // syntax similar to that of CSS Margin
   loaded: function(el) {
     // Custom implementation on a loaded element
     el.classList.add("fade-in");
   }
 });
 observer.observe();



});
// FlexSlider setup using custom selector


})(jQuery);
