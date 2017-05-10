var Main = {
	onLoad: function () {
		// console.log($)
		// $(window).load(function() {
	 //        // Animate loader off screen
	 //        $(".se-pre-con").fadeOut("slow");;
	 //    });

		$(window).on('load',function() {
	        // Animate loader off screen
	        // $(".se-pre-con").fadeOut("slow");;
	    });

		$('a.page-scroll').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
		    $('html,body').animate({
		      scrollTop: target.offset().top - 50
		    }, 900);
		    return false;
		  }
		}
		});

	 // Show Menu on Book
	    $(window).on('scroll', function() {
	        var navHeight = $(window).height() - 500;
	        if ($(window).scrollTop() > navHeight) {
	            $('.navbar-default').addClass('on');
	        } else {
	            $('.navbar-default').removeClass('on');
	        }
	    });

	    $('body').scrollspy({ 
	        target: '.navbar-default',
	        offset: 80
	    });

	    
			console.log( $(".navbar-toggle"))

		        // console.log("Clicked")

		$(".navbar-nav li a").click(function (event) {
		// check if window is small enough so dropdown is created
		var toggle = $(".navbar-toggle").is(":visible");
		if (toggle) {
		$(".navbar-collapse").collapse('hide');
		}
		});

	   
	}
}

module.exports = Main