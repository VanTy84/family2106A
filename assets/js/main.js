(function(a){new WOW().init();a(window).on("load",function(){e()});function e(){a("[data-bgimage]").each(function(){var m=a(this).data("bgimage");a(this).css({"background-image":"url("+m+")",})})}var l=a(window);var j=a(".header-sticky");l.on("scroll",function(){var m=l.scrollTop();if(m<300){j.removeClass("is-sticky")}else{j.addClass("is-sticky")}});var c=a(".header-search-toggle");var b=a(".header-search-form");c.on("click",function(){var m=a(this);if(!m.hasClass("open")){m.addClass("open").find("i").removeClass("zmdi zmdi-search").addClass("zmdi zmdi-close");b.slideDown()}else{m.removeClass("open").find("i").removeClass("zmdi zmdi-close").addClass("zmdi zmdi-search");b.slideUp()}});var h=a("nav.main-navigation");h.meanmenu({meanScreenWidth:"991",meanMenuContainer:".mobile-menu",meanMenuClose:'<span class="menu-close"></span>',meanMenuOpen:'<span class="menu-bar"></span>',meanRevealPosition:"right",meanMenuCloseSize:"0",});var f=a(".hero-slider-active");f.owlCarousel({items:1,loop:true,nav:true,dots:false,animateOut:"fadeOut",animateIn:"fadeIn",navText:["",""]});var g=a(".itemBg");a(".hero-slider-active .singleSlide").each(function(){var m=a(this).find(".itemBg img").attr("src");a(this).css({background:"url("+m+")"})});function i(){a(".hero-slider-active .owl-item").removeClass("next prev");var m=a(".hero-slider-active .owl-item.active");m.next(".owl-item").addClass("next");m.prev(".owl-item").addClass("prev");var n=a(".owl-item.next").find(".itemBg img").attr("src");var o=a(".owl-item.prev").find(".itemBg img").attr("src");a(".hero-slider-active .owl-nav .owl-prev").css({background:"url("+o+")"});a(".hero-slider-active .owl-nav .owl-next").css({background:"url("+n+")"})}i();a(".hero-slider-active").on("translated.owl.carousel",function(){i()});var k=a(".testimonial-active");k.owlCarousel({items:1,loop:true,nav:false,dots:true,navText:["",""]});var d=a(".courses-tab-active");d.owlCarousel({items:4,loop:true,nav:true,dots:false,navText:['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],responsive:{0:{items:1},600:{items:1},768:{items:2},800:{items:3},1000:{items:3},1600:{items:4}}});a(".product-color ul li").on("click",function(){a(this).addClass("checked").siblings().removeClass("checked")});a("#showlogin").on("click",function(){a("#checkout-login").slideToggle(500)});a("#showcoupon").on("click",function(){a("#checkout-coupon").slideToggle(500)});a("#chekout-box").on("change",function(){a(".account-create").slideToggle("100")});a("#chekout-box-2").on("change",function(){a(".ship-box-info").slideToggle("100")});a(".img-popup").magnificPopup({type:"image",gallery:{enabled:true}});a(".popup-youtube").magnificPopup({type:"iframe",removalDelay:300,mainClass:"mfp-fade"});a(".payment-accordion").collapse({accordion:true,open:function(){this.slideDown(550)},close:function(){this.slideUp(550)}});a.scrollUp({scrollText:'<i class="zmdi zmdi-long-arrow-up"></i>',easingType:"linear",scrollSpeed:900,animation:"fade"})})(jQuery);