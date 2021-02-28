jQuery( document ).ready(function() {

	jQuery(window).scroll(function () {

		  if (jQuery(this).scrollTop() > 100) {

			  jQuery('.scrollup').fadeIn();

		  } else {

			  jQuery('.scrollup').fadeOut();
		  }
	});

	jQuery('.scrollup').click(function () {

		  jQuery("html, body").animate({
			  scrollTop: 0
		  }, 600);

		  return false;
	});

	jQuery('#navmain > div').on('click', function(e) {

		e.stopPropagation();

		var parentOffset = jQuery(this).parent().offset(); 
		
		var relY = e.pageY - parentOffset.top;
	
		if (relY < 36) {
		
			jQuery('ul:first-child', this).toggle(400);
		}
	});
});
