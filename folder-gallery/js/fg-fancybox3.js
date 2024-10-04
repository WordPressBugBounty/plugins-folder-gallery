jQuery(document).ready(function() {
	jQuery("[data-fancybox]").fancybox({
		loop : (FancyBoxGalleryOptions.loop == 1),
		toolbar : (FancyBoxGalleryOptions.toolbar == 1),
		infobar : (FancyBoxGalleryOptions.infobar == 1),
		arrows : (FancyBoxGalleryOptions.arrows == 1),
		slideShow : {
			autoStart : (FancyBoxGalleryOptions.autostart == 1),
        	speed     : FancyBoxGalleryOptions.speed*1000
    	},
    	fullScreen : {
        	autoStart : (FancyBoxGalleryOptions.fullscreen == 1),
   		 }
	});
});