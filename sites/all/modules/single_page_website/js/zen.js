(function($){

$(window).ready(function() {
    setTimeout(function() {
        if ($(document).scrollTop() !== 0) $("html, body").animate({ scrollTop: 0 }, 'fast');
}, 1);
});
  $(document).ready(function(){
    var header_elemint = Drupal.settings.single_page.header_element;
    var footer_element = Drupal.settings.single_page.footer_element;
    var menu_element = Drupal.settings.single_page.menu_element;
    var content_element = Drupal.settings.single_page.content_element;
    $(header_elemint).css({
      'width' : '100%'
    });
    $(footer_element).css({
      'position' : 'fixed',
      'bottom' : '0',
      'width' : '100%',
      'z-index' : '500'
    });
    $(window).scroll(function() {
if ($(this).scrollTop() > 250){  
    $('.page-single-page #page, .page-single-page #full-bg').addClass("sticky").removeClass("no-sticky");
  }
  else{
    $('.page-single-page #page, .page-single-page #full-bg').removeClass("sticky").addClass("no-sticky");
  }
});





    //if ($.browser.webkit) {
    //	$(".single_page_wrapper h2").css("padding-top",parseInt($(".single_page_wrapper h2").css("margin-top"))); // fix webkit anchor issue
    //}
   /* var maxHeight = 0;
    $(".item-list").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    $(".item-list").height(maxHeight);
    $(window).resize(function(){
    $('.item-list').css('max-height','auto');
    $('.item-list').height(maxHeight);
    });*/

    var header_height = parseInt($(header_elemint).height()) + parseInt($(header_elemint).css("padding-top")) + parseInt($(header_elemint).css("padding-bottom"));
    var footer_height = parseInt($(footer_element).height()) + parseInt($(footer_element).css("padding-top")) + parseInt($(footer_element).css("padding-bottom"));
    var menu_height = parseInt($(menu_element).height()) + parseInt($(menu_element).css("padding-top")) + parseInt($(menu_element).css("padding-bottom"));
    var window_height = $(window).height();
    //var h2_height = parseInt($(".single_page_wrapper h2").height()) + parseInt($(".single_page_wrapper h2").css("margin-top")) + parseInt($('.single_page_wrapper h2').css("margin-bottom"));
    //	$(header_elemint).parent().css("margin-top", header_height);
    /*$(".item-list").css("padding-top",header_height);
    //	$(".single_page_wrapper .single_page").height(window_height-header_height-footer_height-h2_height);
    if ($(footer_element).length > 0){
      $("item-list").height(maxHeight);
    }
    else{
      $(".item-list").height(maxHeight);
    }
  //  $(".single_page_wrapper").height(maxHeight);
    //$(content_element).children("div:not(#content)").hide();
    $(".sidebar").hide();
    $(".sidebar-first #content .section").css("padding-left", "0");
    $(menu_element).css({
      //'position' : 'relative',
     // 'top' : header_height,
      'width' : '100%',
      'z-index' : '500'
    });
*/
 


   function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.single_page_wrapper').css('min-height', windowHeight);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });










  });
   


})(jQuery);
