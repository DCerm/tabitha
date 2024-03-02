$('.nav-left .nav-left-toggle').on('click', function(e) {
   e.preventDefault();
   $("#right-nav").removeClass("nav-right-open");
   $("#left-nav").toggleClass('nav-left-open');
});
$('.nav-right .nav-right-toggle').on('click', function(e) {
   e.preventDefault();
   $("#left-nav").removeClass("nav-left-open");
   $("#right-nav").toggleClass('nav-right-open');
});
$('.scrolly-down').on('click', function(e) {
   e.preventDefault();
   scrollToNext();
});
$('.scrolly-bottom').on('click', function(e) {
   e.preventDefault();
   $('html,body').animate({scrollTop: $("#main-footer").offset().top}, 'fast');
   numScrollCurr = numMaxTarget;
});
$('.scrolly-top').on('click', function(e) {
   e.preventDefault();
   $("html, body").animate( { scrollTop: 0 }, 'fast');
   numScrollCurr = 0;
});
$('.scrolly-up').on('click', function(e) {
   e.preventDefault();
   scrollToPrev();
});
function closeLeftOpenRight() {
   $("#left-nav").removeClass("nav-left-open");
   $("#right-nav").addClass('nav-right-open');
}
function closeRightOpenLeft() {
   $("#right-nav").removeClass("nav-right-open");
   $("#left-nav").addClass('nav-left-open');
}
function openLeft() {
   $("#left-nav").addClass('nav-left-open');
}
