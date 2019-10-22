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

//  $(this).parents('body').addClass('prevent-scroll');
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
$(document).ready(function(){
  $('.page-taxonomy .field-items a, .field-content a, .views-field .views-field-field-slider-image a, .field-name-field-slider-image a, .field-type-image a').featherlightGallery();
});

var colors = ["#99E079","#7CEFD1","#FF7572","#2952C4","#FFC260","#AAAAFF","#4EB0CE"];
  var i = 0;
  $('.view-thumbnail-gallery .view-content .views-row').each(function(){
    $(this).css("background-color", colors[i]);
    i = (i + 1) % colors.length;
  });
  $('.paragraphs-item-hero-showcase').each(function(){
    $(this).css("background-color", colors[i]);
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


const observer = lozad();
observer.observe();

$('.specimens img, .view-thumbnail-gallery img, .field-name-field-slider-image img, .field-type-image img,.entity-paragraphs-item img').each(function(){
    $(this).attr("data-src" , $(this).attr("src")).removeAttr("src");
      $(this).addClass("lozad");
 });
 lozad('.lozad', {
 load: function(el) {
     el.src = el.dataset.src;
     el.onload = function() {
         el.classList.add('fade-up')
     }

 }
}).observe()

/*$(document).on('ready', function() {
  var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;*/

  /* Set the max scrollable area */
  /*max = docHeight - winHeight;
  progressBar.attr('max', max);
  progressBar.width(winHeight-72);*/

/*  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});*/
// now on github:
// https://github.com/simeydotme/jquery-unorphanize



// PEW PEW !!
$(function() {
  $("p ,.case-notes").killThemOrphans(1);
});

$.fn.killThemOrphans = function( gather ) {

  // if we haven't supplied a number for the number
  // of words to join the orphan, or we supplied
  // it wrong, make it 1.
  if( typeof( gather ) !== "number" ) {
    gather =  1;
  }
  // make it chain-able
  return $(this).each( function() {

    var $el = $(this),
      htmlEls = [],
      text, el, els, orphansExp, i,
      replaceOrphans, lngth, replaceRegex;
    text = $el.html();
    // grab any html tags like a,strong,em
    els = text.match(/<([A-Z][A-Z0-9]*)\b[^>]*>/gi);
    // each time we match a html element opening tag (eg: <a href="">),
    // save it into array and replace it with a placeholder like: "__n__";
    for( el in els ) {
      htmlEls.push( els[el] );
      text = text.replace( els[el] , "__"+el+"__");
    }
    // now we find the given number of gathered words, and then insert a
    // non-breaking-space (&nbsp;) in to the given number of spaces.
    orphansExp = new RegExp("( (\\S)+){"+gather+"}$");
    if( text.match( orphansExp ) ) {
      replaceOrphans = text
        .match( orphansExp )[0]
        .replace( /\s/gi , "&nbsp;" );
      text = text.replace( orphansExp , replaceOrphans );
    }
    // now we have put the non-breaking-spaces in, we must replace the
    // placeholders with the original html elements we stored earlier.
    lngth = htmlEls.length;
    for( i = 0; i < lngth; i++ ) {
      replaceRegex = new RegExp("__"+i+"__");
      text = text.replace( replaceRegex , htmlEls[i] );
    }
    // and finally replace the html with the sparkly new text string.
    $el.html( text );
  });
};
//scroll within div only
 /*$('.specimen-wrapper ').on( 'mousewheel DOMMouseScroll', function (e) {

  var e0 = e.originalEvent;
  var delta = e0.wheelDelta || -e0.detail;

  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
  e.preventDefault();
});*/
});
})(jQuery);
