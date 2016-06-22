$(function() {

  $('#skills').click(function() {
    scrollToArea('.skills');
  });

  $('#projects').click(function() {
    scrollToArea('.projects');
  });

  $('#contact').click(function() {
    scrollToArea('.contact');
  });

  function scrollToArea(areaName) {
    $('html,body').animate({
      scrollTop: $(areaName).offset().top},
      'slow');
  }

  //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
