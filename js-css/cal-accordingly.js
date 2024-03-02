$(document).ready(function() {
   $(".cal-accordingly .cal-accordingly-header").click(function() {
      //$('.cal-accordingly-header').removeClass('opened');
      if($(this).next("div").is(":visible")) {
         $(this).next("div").slideUp("fast");
         //$('.cal-accordingly-header').removeClass('opened');
         $(this).toggleClass('opened');
      } else {
         $(".cal-accordingly .cal-accordingly-content-wrapper").slideUp("fast");
         $(this).next("div").slideToggle("fast");
         $('.cal-accordingly-header').removeClass('opened');
         $(this).toggleClass('opened');
      }
   });
});
