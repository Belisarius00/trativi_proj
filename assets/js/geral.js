$(function() {

	$(".hamburguer-wrapper").on("click", function() {
		$(".line:first-of-type").toggleClass("first");
		$(".line:last-of-type").toggleClass("last");
		$(".main-menu-second-level-wrapper").fadeOut();
		$(".main-menu-block").removeClass("active");

		if ( $(".main-menu-container").hasClass("opened") ) {
		    
			$(".main-menu-block").fadeOut(); 
			setTimeout(function(){ 	
				$(".main-menu-container").removeClass("opened");
			}, 500); 
		} else {
			$(".main-menu-container").addClass("opened");
			setTimeout(function(){ 
				$(".main-menu-block").fadeIn(); 
			}, 500);
		};

	});

  if ( $(window).width() >= 1200) {
  		$("a.change-link").attr("href", "javascript:;");

        $(".main-menu-block:not(:last-of-type)").on("click", function() {
        	$(this).addClass("active").siblings().removeClass("active");
			$(".main-menu-second-level-wrapper").fadeOut();
			$(this).children(".main-menu-second-level-wrapper").fadeIn();
		});

		$(".main-menu-second-level-block").on("click", function(){
			$(".main-menu-block, .main-menu-second-level-wrapper").fadeOut(); 
			setTimeout(function(){ 	
				$(".main-menu-container").removeClass("opened");
				$(".line:first-of-type").removeClass("first");
				$(".line:last-of-type").removeClass("last");
			}, 1000);
		})
    };

	$(".nav-item a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 1000, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

	if ( $(".side-bar-wrapper").length ) {
	  
	  AOS.init();

    	AOS.init({
    		offset: 0, // offset (in px) from the original trigger point
    		duration: 1000, // values from 0 to 3000, with step 50ms
    		easing: 'ease', // default easing for AOS animations
    		once: false, // whether animation should happen only once - while scrolling down
    		mirror: false, // whether elements should animate out while scrolling past them
    	});
    
    	if ( $(window).width() >= 1024 ) {
    
    		AOS.init({
    			delay: 700, // values from 0 to 3000, with step 50ms
    		});
    
    	}
    
    
    	if ( $(window).width() <= 1023 ) {
    
    		AOS.init({
    			delay: 300, // values from 0 to 3000, with step 50ms
    		});
    
    	}
	    
	}
	

	$(".carousel").swipe({
	    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') $(this).carousel('next');
			if (direction == 'right') $(this).carousel('prev');
	    },
	    allowPageScroll:"vertical"
	});

});