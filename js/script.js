$(function() {

  $('.self-slice').hide();
  $('.group1').fadeIn('slow');
  setTimeout(function() {
    $('.group2').fadeIn('slow');
  }, 1000);
  setTimeout(function() {
    $('.group3').fadeIn('slow');
  }, 2000);
  setTimeout(function() {
    $('.group4').fadeIn('slow');
  }, 3000);

  $('#home').click(function() {
    $('html,body').animate({
      scrollTop: $(".jumbotron").offset().top},
      'slow');
  });

  $('#skills').click(function() {
    $('html,body').animate({
      scrollTop: $(".skills").offset().top},
      'slow');
  });

  $('#projects').click(function() {
    $('html,body').animate({
      scrollTop: $(".projects").offset().top},
      'slow');
  });

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
