$(function() {

  $('#skills').click(function() {
    scrollToArea('.skills');
  });

  $('#projects').click(function() {
    scrollToArea('.projects');
  });

  $('#resume').click(function() {
    scrollToArea('.resume');
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

  //animate progress bars
  var stopAnimation = false;

  $(window).scroll(function() {
    if ($(this).scrollTop() > 400 && !stopAnimation) {
      animateProgressBars(true);
    }
  });

  function animateProgressBars(doAnimation) {
    if (doAnimation) {
      stopAnimation = true;
      $('.progress-bar').each(function() {
        var thisBar = $(this);
        var animatePercentage = thisBar.attr("data-percentage");
        var currentPercentage = 0;

        var progress = setInterval(function() {
          if (currentPercentage >= animatePercentage) {
            clearInterval(progress);
          } else {
            currentPercentage += 2;
            thisBar.css('width', (currentPercentage) + '%');
          }
        }, 50);
      });
    }
  }

  /* timeline js */
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var rectHeight = rect.bottom - rect.top;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clickHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  var items = document.querySelectorAll(".timeline .timeline-element");

  // code for the isElementInViewport function

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

});
