function toggleSpotlight(numSpotlight) {
   var e = document.getElementById(numSpotlight);
   if (e.style.display == 'block') {
      var numScrollTo = numSpotlight+'s';
      var viewableOffset = $("#"+numScrollTo).offset().top - $(window).scrollTop();
      if ((viewableOffset > 200)||(viewableOffset < -200)) {
         setTimeout(function(){e.style.display = 'none';},500);
         $('html,body').animate({scrollTop: $("#"+numScrollTo).offset().top}, 'slow');
      } else {
         $('html,body').animate({scrollTop: $("#"+numScrollTo).offset().top}, 'slow');
         e.style.display = 'none';
      }
   } else {
      var numScrollTo = numSpotlight+'s';
      $('html,body').animate({scrollTop: $("#"+numScrollTo).offset().top}, 'slow');
      e.style.display = 'block';
   }
}
function scrollToSpotlight(numSpotlight) {
   var e = document.getElementById(numSpotlight);
   var numScrollTo = numSpotlight+'s';
   $('html,body').animate({scrollTop: $("#"+numScrollTo).offset().top}, 'slow');
   e.style.display = 'block';
}
function scrollToRelated(numRelated) {
   var e = document.getElementById('related-'+numRelated);
   var numScrollTo = 'r-'+numRelated;
   $('html,body').animate({scrollTop: $("#"+numScrollTo).offset().top}, 'slow');
   e.style.display = 'block';
   var strLabel = 'show-hide-related-'+numRelated;
   document.getElementById(strLabel).innerHTML = "[<span class=\"plus-minus\">&#8211;</span>] hide related dates";
}
function toggleRelated(numRelated) {
   var e = document.getElementById(numRelated);
   var eToggle = 'show-hide-'+numRelated;
   if (e.style.display == 'block') {
      e.style.display = 'none';
      document.getElementById(eToggle).innerHTML = "[<span class=\"plus-minus\">+</span>] show related dates";
   } else {
      e.style.display = 'block';
      document.getElementById(eToggle).innerHTML = "[<span class=\"plus-minus\">&#8211;</span>] hide related dates";
   }
   numRelated = numRelated.replace('related-','r-');
   $('html,body').animate({scrollTop: $("#"+numRelated).offset().top}, 'slow');
}
function scrollToFooter() {
   $("#left-nav").removeClass("nav-left-open");
   $('html,body').animate({scrollTop: $("#main-footer").offset().top}, 'fast');
   numScrollCurr = numMaxTarget;
}
function scrollToMenuTop() {
   $('#left-nav').animate({scrollTop: 0}, 'slow');
}
function scrollToNext() {
   numScrollCurr++;
   if (numScrollCurr > numMaxTarget) {
      numScrollCurr = 0;
      $('html,body').animate({scrollTop: 0}, 'fast');
   } else {
      var scrollTargetNext = "scrolltarget-"+numScrollCurr;
      $('html,body').animate({scrollTop: $("#"+scrollTargetNext).offset().top}, 'fast');
   }
}
function scrollToPrev() {
   numScrollCurr--;
   if (numScrollCurr == 0) {
      numScrollCurr = 0;
      $('html,body').animate({scrollTop: 0}, 'fast');
   } else if (numScrollCurr < 0) {
      numScrollCurr = numMaxTarget;
      var scrollTargetPrev = "scrolltarget-"+numScrollCurr;
      $('html,body').animate({scrollTop: $("#"+scrollTargetPrev).offset().top}, 'fast');
   } else {
      var scrollTargetPrev = "scrolltarget-"+numScrollCurr;
      $('html,body').animate({scrollTop: $("#"+scrollTargetPrev).offset().top}, 'fast');
   }
}
