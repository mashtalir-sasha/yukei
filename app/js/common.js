$(function() {

	// Скролинг по якорям
	$('.anchor').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top-60 // отступ от меню
		}, 500);
		setTimeout(function(){
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-60 // отступ от меню
			}, 500);
		}, 1000);
	e.preventDefault();
	});

	// Клик по гамбургеру на моб версии
	$('.nav-btn').click(function() {
		$('.nav-mob').toggleClass('show');
	});
	$('.nav-mob .nav-list__item').click(function() {
		$('.nav-mob').removeClass('show');
	});

	// Отправка формы
	$('form').submit(function() {
		var form = $(this);
		var data = new FormData(form[0]);
		$.ajax({
			type: 'POST',
			url: 'mail.php',
			data: data,
			contentType: false,
			processData: false,
			success: (function() {
				$.fancybox.close();
				$.fancybox.open({src:'#thn'});
			})()
		});
		return false;
	});

	// Инит фансибокса
	$('.fancybox').fancybox({
		margin: 0,
		padding: 0
	});

	//Якорь наверх
	$("[href='#top']").click(function(e){
		$('html, body').stop().animate({
			scrollTop: $('#top').offset().top
		}, 300);
		e.preventDefault();
	});

	$('.height').matchHeight();
	$('.service-item').matchHeight();

	$('.portfolio-slider').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true,
		appendDots: $('.portfolio-dots')
	});

	$('.portfolio-slider_xs').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true,
		appendDots: $('.portfolio-dots_xs'),
		adaptiveHeight: true
	});

	$('.portfolio-dots .slick-dots li button').each( function(){
		if ($(this).html() < 10) {
			$(this).prepend('0');
		}
	});
	var lastNumbHead = $('.portfolio-dots .slick-dots li:last-child button').html();
	$('.portfolio-dots .slick-dots').append('<div class="last">'+lastNumbHead+'</div>');

	$('.portfolio-dots_xs .slick-dots li button').each( function(){
		if ($(this).html() < 10) {
			$(this).prepend('0');
		}
	});
	var lastNumbHead = $('.portfolio-dots_xs .slick-dots li:last-child button').html();
	$('.portfolio-dots_xs .slick-dots').append('<div class="last">'+lastNumbHead+'</div>');

	$('.reviews-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		appendDots: $('.reviews-dots'),
		centerMode: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			},
		]
	});

	$('.clip-slider').slick({
		arrows: true,
		fade: true,
	});

	// Cache selectors
	var lastId,
	    topMenu = $("#top-menu"),
	    topMenuHeight = topMenu.outerHeight()+15,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});

	$('.nav-phone i').click(function() {
		$('.nav-info').toggleClass('show');
	});

	$('.catalog-slider').slick({
		arrows: true,
		dots: false
	});

	$(".scroll").each(function () {
		var block = $(this);
		$(window).scroll(function() {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				var top = block.offset().top-400;
			} else {
				var top = block.offset().top+400;
			}
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass("animated")) {
					block.addClass("animated");
					block.trigger('animatedIn');
				}
			}
		});

		setTimeout(function(){
			$('iframe').each(function () {
				var link = $(this).data('src');
				$(this).attr('src', link); 
			});
		}, 5000);
	});

	$(window).on('load', function() {
		$('.head-title, .head-list, .head-btn, .head-img').addClass('animated');
	});

	$('.catalog-item__btn').click(function () {
		var parent = $(this).parent();
		var name = parent.find('.catalog-item__name').html();
		$('.subttl').val(name);
	})

});
