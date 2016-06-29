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

  //only animate progress bars once
  var stopAnimation = false;

  //timeline items to animate
  var items = $(".timeline-element");

	$(window).scroll(function(){
    //Check to see if the window is top if not then display button
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}

    //animate progress bars
    if ($(this).scrollTop() > 400 && !stopAnimation) {
      animateProgressBars(true);
    }

    //animate timeline items if in view
    checkTimelineItemsInView();

	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
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

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.top <= (window.innerHeight - (window.innerHeight * 0.2) || document.documentElement.clickHeight - (window.innerHeight * 0.2)) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // check to see if timeline items are in view
  function checkTimelineItemsInView() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

});
