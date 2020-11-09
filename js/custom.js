/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var Travelio = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- Travelio Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.wowanimation();
			this.Magnific_popup();
			this.TestimonialSlider();
			this.HomeSlider();
			this.Datepicker();
			this.ContactFormSubmit();
			
		},
		
		/*-------------- Travelio Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		wowanimation: function(){
			new WOW().init()
		},
		//Testimonial slider on home page
		TestimonialSlider: function(){
			if($('.tr_testimonial_slider .owl-carousel').length > 0){		
				$('.tr_testimonial_slider .owl-carousel').owlCarousel({
					loop:true,
					margin:30,
					dots:false,
					nav:false,
					autoplay:true,
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						768:{
							items:2
						},
						1000:{
							items:2
						}
					}
				});
			}
		},
		//Magnific Popuo
		Magnific_popup: function() {
            $('.tr_overlay_content .zoom_icon').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            }); 
			$('.tr_footer_gallery .zoom_img').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        },
		HomeSlider: function(){
			var tpj=jQuery;
			
			var revapi477;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_477_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_477_1");
				}else{
					revapi477 = tpj("#rev_slider_477_1").show().revolution({
						sliderType:"standard",
jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
						sliderLayout:"auto",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"on",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 50,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							thumbnails: {
								style:"gyges",
								enable:true,
								width:80,
								height:80,
								min_width:80,
								wrapper_padding:10,
								wrapper_color:"#333333",
								wrapper_opacity:"0",
								tmp:'<span class="tp-thumb-img-wrap">  <span class="tp-thumb-image"></span></span>',
								visibleAmount:5,
								hide_onmobile:false,
								hide_onleave:false,
								direction:"vertical",
								span:true,
								position:"inner",
								space:5,
								h_align:"left",
								v_align:"top",
								h_offset:0,
								v_offset:0
							}
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1200,1024,778,480],
						gridheight:[600,600,600,450],
						lazyType:"single",
						parallax: {
							type:"scroll",
							origo:"slidercenter",
							speed:400,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
							type:"scroll",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});	/*ready*/
		},
		//Datepicker
		Datepicker:  function() {
			$( ".datepicker" ).datepicker();
		},
		//contact form submition
		ContactFormSubmit: function(){
			if($('#send_btn').length > 0){	
				$("#send_btn").on("click", function() {
				var e = $("#ur_name").val();
				var t = $("#ur_mail").val();
				var ph = $("#ur_phone").val();
				var r = $("#msg").val();
				$.ajax({
					type: "POST",
					url: "ajaxmail.php",
					data: {
						username: e,
						useremail: t,
						userphone: ph,
						mesg: r
					},
					success: function(n) {
						var i = n.split("#");
						if (i[0] == "1") {
							$("#ur_name").val("");
							$("#ur_mail").val("");
							$("#ur_phone").val("");
							$("#msg").val("");
							$("#err").html(i[1]);
						} else {
							$("#ur_name").val(e);
							$("#ur_mail").val(t);
							$("#ur_phone").val(ph);
							$("#msg").val(r);
							$("#err").html(i[1]);
						}
					}
				});
			});
		}
	 }
	
		
		   
	};

	Travelio.init();

	// Load Event
	// Loader js
	$(window).on('load', function() {
		jQuery(".img").fadeOut();
	        jQuery("#tr_preloader_wrapper").delay(350).fadeOut("slow");
	});

	// Scroll Event
	// fixed menu
	$(window).on('scroll', function () {
	     if ($(this).scrollTop() > 300) {
                $(".tr_header_wrapper").addClass("tr_fixed");
            } else {
                $(".tr_header_wrapper").removeClass("tr_fixed");
			}
	});
	
	
	jQuery(document).ready(function(){
		//Coundown Timer 
		$('.future_date').countdowntimer({
			dateAndTime : "2018/07/25 00:00:00",
			size : "lg",
			regexpMatchFormat: "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})",
			regexpReplaceWith: "<div class='tr_timediv'>$1<span class='displayformat'> Days </span> </div> <div class='tr_timediv'>$2<span class='displayformat'> Hrs </span> </div> <div class='tr_timediv'> $3<span class='displayformat'> Min </span> </div><div class='tr_timediv'> $4<span class='displayformat'> Sec </span></div>"
		});
	});

})(jQuery);