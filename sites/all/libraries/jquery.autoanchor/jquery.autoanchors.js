/*
 * jQuery autoanchor plugin
 *
 * Copyright (c) 2009 Alexandr Zykov
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

/*var autoanchor = {};
window.autoanchor = autoanchor;
autoanchor.anc = [];
autoanchor.cur = '';

jQuery.fn.addanchors = function() {
  return this.each(function(){
    autoanchor.anc.push(this);
  });
};

jQuery(window).scroll(function () {
  if (autoanchor.anc.length == 0) return;
  
  var scrollY = (window.scrollY) ? window.scrollY : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
  var d = 0;
  
  autoanchor.d = autoanchor.anc[0].offsetTop-scrollY;
  autoanchor.e = 0;
  
  for (anc in autoanchor.anc) {
    d = autoanchor.anc[anc].offsetTop-scrollY;
    if ((d <= 0) && (autoanchor.d < d)) {
      autoanchor.d = d;
      autoanchor.e = anc;
    };
  };
  
    if (autoanchor.cur != autoanchor.anc[autoanchor.e].name) {
    autoanchor.cur = autoanchor.anc[autoanchor.e].name;
    location.hash = '#'+autoanchor.cur;
  }
    jQuery('#main-menu a').removeClass('active');
  jQuery('#main-menu a[href="/portfolio/#spw-about_scott' + autoanchor.cur + '"]').addClass('active');

  
});*/



  
  var autoanchor = {};
  var menu_element = '#header #navigation ul.#menu';
  
window.autoanchor = autoanchor;
autoanchor.anc = [];
autoanchor.cur = ''; 

function changeHash(id) {

  try {
    history.replaceState(null,null,'#'+ id);
  }
  catch(e) {
    location.hash = '#'+id;
  }
  return false;
}

jQuery.fn.addanchors = function() {
  return this.each(function(){
    autoanchor.anc.push(this);
  });
};

jQuery(window).scroll(function (event) {
  if (autoanchor.anc.length == 0) return;
  
  var scrollY = (window.scrollY) ? window.scrollY : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
  //alert(scrollY);
  var d = 0;
  
  autoanchor.d = autoanchor.anc[0].offsetTop-scrollY;
  autoanchor.e = 0;
 
  for (anc in autoanchor.anc) {
    d = autoanchor.anc[anc].offsetTop-scrollY;
  // alert(d);
    if ((d <= 0) && (autoanchor.d < d)) {
      autoanchor.d = d;
      autoanchor.e = anc;
    };
  };
 
  if (autoanchor.cur != autoanchor.anc[autoanchor.e].name) {
    autoanchor.cur = autoanchor.anc[autoanchor.e].name;
   //alert(autoanchor.cur);
   // location.hash = '#'+autoanchor.cur;
   //alert(window.history.pushState);
     /*    if (typeof history.pushState != 'undefined') { 
      history.pushState(null, null, autoanchor.cur); 
    }   */
    changeHash(autoanchor.cur)
  //document.location.hash = '#'+autoanchor.cur;
    event.preventDefault();
    var current_item = jQuery('#'+autoanchor.cur);
    var index = jQuery("div.single_page_wrapper").index(current_item);
    
    jQuery(menu_element + " li").removeClass("active");
    jQuery(menu_element + " li a").removeClass("active");     
    jQuery(menu_element + " li:eq(" + index + ")").addClass("active");
    jQuery(menu_element + " li:eq(" + index + ") a").addClass("active");      
      //var target_offset = jQuery(location.hash).offset();
    //var target_top = target_offset.top;

  } 
 
  
});