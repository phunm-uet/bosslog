
// preloader
$(window).on('load', function () {
	$("#loading").fadeOut(500);
})


// sticky-header
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky");
	} else {
		$("#sticky-header").addClass("sticky");
	}
});

$(document).ready(function(){
    $('.venobox_custom').venobox(); 
});


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      dots:true,
      nav:false,
       responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
  });
});
