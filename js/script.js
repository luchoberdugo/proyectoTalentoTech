// Global Variables
$(function() {
    window.myGlobalPosition = '';
});

//========================================================================
// Starting Document.Ready Function

jQuery(document).ready(function(){
	
	//=========== Necessary CSS Targets
	
	$('.nav li:first-child').css('background','none');
	$('#home-infos .news .list li:last-child').css('padding','0px').css('margin','0px').css('background','none');
	$('.tabed .block li:last-child').css('padding','0px').css('margin','0px').css('background','none');
	$('#bottom > li:last-child').css('margin','0px');
	$('#bottom li ul li:last-child').css('background','none').css('padding','0px');
	$('#left-area .info-right .nutritional ul li:last-child').css('border','none').css('padding-bottom','0px');
	$('#left-area .info-right .nutritional ul li:last-child').prev('li').css('border','none').css('padding-bottom','0px');
	
	//==================================
	
	
	//this function attached focus and blur events with input elements
	var addFocusAndBlur = function($input, $val){
		
		$input.focus(function(){
			if (this.value == $val) {this.value = '';}
		});
		
		$input.blur(function(){
			if (this.value == '') {this.value = $val;}
		});
	}

	// example code to attach the events
	addFocusAndBlur($('#s'),'Search for');
	addFocusAndBlur($('#cname'),'Name here');
	addFocusAndBlur($('#cemail'),'Email here');
	addFocusAndBlur($('#cmessage'),'Message');
	addFocusAndBlur($('#message'), 'Type your comments here');
	
	//==================================
	
	
	// Hover effects for Header and Footer Logos
	
	$('#header .logo, .footer-logo').hover(function(){
		$(this).stop(true, true).animate({opacity: 0.5},300);
	},function(){
		$(this).stop(true, true).animate({opacity: 1},300);	
	});
	
	// Width Counter for Navigation
	
	var navWidthCounter = function(){
			var itemsCount = $('.nav > li').size();
			var allListWidth = 0;
			i = 0;
			while(i <= itemsCount){
				allListWidth += $('.nav > li:nth-child(' + i + ')').width();
				i++;
			}
			return allListWidth;
		}
	
	var navWidth = navWidthCounter();
	if(navWidth > 780){
		$('.nav').after('<span class="nav-more"><a>More</a><ul></ul></span>');
		while(navWidth > 780){
	  		var lastoneis = $('.nav > li:last-child').html();
	  		$('.nav > li:last-child').remove();
			$('.nav-more ul').append('<li>' + lastoneis + '</li>');
			navWidth = navWidthCounter();
		}
	}
	
	//==================================
	
	
	// Navigation Hover
	
	$('#nav-wrap ul > li, .nav-more').hover(function(){
		$(this).stop(true, true).children('a').animate({color: "#B3C897" }, 200);
	  	$(this).children('ul').fadeIn(350);
	}, function(){
		$(this).stop(true, true).children('a').animate({color: "#fff"}, 200);
		$(this).children('ul').hide();
	});
	
	//==================================
	
	
	// Pretty Photo Relation Target
	
	$("a[rel^='prettyPhoto']").prettyPhoto(); 
	
	//==================================
	
	
	// Image hover effect for whole site
	
	$('.img-box img, .single-img-box img, .img-box-serv img').not('.single-slider img').hover(function(){
		$(this).stop().animate({opacity:0.7},300);
	}, function(){
		$(this).stop().animate({opacity:1},300);
	});
	
	//==================================
	
	
	// Buttons and Pagination hover effects
	
	$('.readmore, #pagination a').hover(function(){
           $(this).stop().animate({color: "#ccc" }, 650);
	}, function(){
		$(this).stop().animate({color: "#fff" }, 650);
	});
	
	//==================================
	
	
	// Social Navigation hover effect
	$('.social-nav a').hover(function(){	      
			$(this).stop(true, true).animate({backgroundPosition: '0px -23px'},250);
	}, function(){
			$(this).stop(true, true).animate({backgroundPosition: '0px 0px'},250);
	});		
	
	//==================================
	
	
	// Cycle Slider Control for Basic and Right Info Slider
	
	$('.slides ul').cycle({ 
	    fx:         'scrollHorz',
		easing:		'easeInOutSine',
	    timeout:	5000,
		speed:		1000,
	    pager:      '.sliderNav span'
	});
	
	//==================================
	
	
	// Cycle Slider Control More Recipes on Recipe Single Pages More Recipes Widget
	
	$('.more-recipes ul').cycle({ 
	    fx:         'scrollHorz',
		easing:		'easeInOutSine',
	    timeout:     0,
		next:		'.next',
		prev:		'.prev'
	});

	//==================================
	
	
	// Cycle Slider Control for Recipe Single Page Main Image
	
	$('.single-slider').cycle({
		fx:			'scrollHorz',
		easing:		'easeInOutSine',
		timeout:	3000,
		next:		'.next-s',
		prev:		'.prev-s',
		pager:		'.img-nav'
	});
	
	//==================================
	
	
	// Cycle Slider Control for Thumbnail Slider

	$('.thumb-slider').cycle({ 
	    fx:			'scrollHorz', 
	    speed:		900, 
	    timeout:	4000,
		easing:		'easeInOutSine',
	    pager:		'.sliderThumbs', 
	     
	    // callback fn that creates a thumbnail to use as pager anchor 
	    pagerAnchorBuilder: function(idx, slide) { 
	        return '<li><a href="#"><img src="' + slide.src + '" width="130" height="53" /></a></li>'; 
	    } 
	});
	
	//==================================

	// Image Hover Effect for Slider Thumbs
	
	$('.sliderThumbs li a img').hover(function(){
		$(this).stop().animate({opacity:0.7},300);
	}, function(){
		$(this).stop().animate({opacity:1},300);
	});
	
	//==================================
	
	
	//NIVO SLIDER

	$('.nivo-slides').nivoSlider({

		effect:'boxRain,fold,fade', // Specify sets like: fold,fade,sliceDown,boxRain,random
		slices:25, // For slice animations
		boxCols: 16, // For box animations
		boxRows: 8, // For box animations
		animSpeed:600, // Slide transition speed
		pauseTime:6000, // How long each slide will show
		startSlide:0, // Set starting Slide (0 index)
		directionNav:true, // Next & Prev navigation
		directionNavHide:true, // Only show on hover
		controlNav:true, // circles navigation
		captionOpacity: 0.7
	});
	
	//==================================
	
	
	// Tabs Code for whole site
	
	$('.tabed .tabs li').append('<span></span>');
	
	$('.tabed .tabs li').click(function(){
		var tabNumber = $(this).index();
		$(this).parent('ul').siblings('.block').removeClass('current');
		$(this).siblings('li').removeClass('current');
		$(this).addClass('current');
		$(this).parent('ul').parent('.tabed').children('.block:eq('+ tabNumber +')').addClass('current');
	});
	
	//==================================
	
	
	// Accordion for Whole Site
	
	$('.accordion h5').click(function(){
		if(!$(this).hasClass('current')){
			var tabNumber = $(this).index();
			$('.accordion .pane.current').slideUp(700, function(){ $(this).removeClass('current'); });
			$(this).next('.pane').show('blind',700,function(){ $(this).addClass('current'); });
			$('.accordion h5.current').removeClass('current');
			$(this).addClass('current');
		}
	});
	
	//==================================
	
	
	// Toggle Box Code for Whole Site

	$('.toggle-box ul li p').slideUp('slow');
	$('.toggle-box ul li h5').click(function(){
		if($(this).parent('li').hasClass('active')){
	  		$(this).stop(true, true).siblings('p').slideUp('slow');
			$(this).parent('li').removeClass('active');
		} else {
			$(this).stop(true, true).siblings('p').show('blind', 500);
			$(this).parent('li').addClass('active');
		}
	});
	
	//==================================
	
	
	// FAQ list counter for FAQ page
	
	var setFaqCount = function(){
			$('.faq-list li').each(function(index, element) {
	           $(this).children('.number').prepend(index+1); 
	        });
		}
	setFaqCount();
	
	//==================================


    // Twitter Fetcher Target Code
    function dateFormatter(date) {
        return date.toTimeString();
    }
    twitterFetcher.fetch('353252568291504128', 'twitter_update_list', 2, true, false, true, dateFormatter, false);
	
	// FAQ Toggle Effect for FAQ Page
	
	$('.faq-list li').children('p').slideUp();
	$('.faq-list li.active').children('p').show('blind',1000);
	$('.faq-list li h3').click(function(){
		if($(this).parent('li').hasClass('active')){
			$(this).siblings('p').slideUp(800);
			$(this).parent('li').removeClass('active');
		} else {
			$(this).parent('li').addClass('active');
			$(this).siblings('p').show('blind',800);
		}
	});
	
	//==================================
	
	
	// Recipe Single Carousel Code for Recipe Single Full Width Page
	
	var pieceWidth = $('#horiz_container li').width() + parseInt($('#horiz_container li').css('padding-left')) + parseInt($('#horiz_container li').css('margin-left'));
	var pieceCount = $('#horiz_container li').length;
	var outerWidth = pieceCount/2*pieceWidth;
	$('#horiz_container').css('width',outerWidth);
	var carStatus = 0;
	$('#horiz_container_outer .right').click(function(){
		if(carStatus < (pieceCount/2)*pieceWidth-(pieceWidth+pieceWidth)){
			$('#horiz_container').animate({left: "-="+pieceWidth},500);
			carStatus += pieceWidth;
			}
	});
	$('#horiz_container_outer .left').click(function(){
		if(carStatus > 0){
			$('#horiz_container').animate({left: "+="+pieceWidth},500);
			carStatus -= pieceWidth;
		}
	});
	
	//==================================
	
	
	// Recipe Single Full Width Page Image Switch Code from Carousel
	
	$('#horiz_container li').click(function(){
		var $parent_li = $(this);
		var thisImgSrc = $(this).children('a').attr('rel');
		$('.single-img-box img').fadeOut(200,function(){
			$('.recipe-single-img').css('background','url(images/loading.gif) center center no-repeat');
			$(this).attr('src',thisImgSrc);
			if(!$parent_li.hasClass('loaded'))
			{
				$(this).load(function(){
					$(this).fadeIn(200,function(){ $('.recipe-single-img').css('background','none'); });
					$parent_li.addClass('loaded');
				});
			}
			else
			{
				$(this).fadeIn(200,function(){ $('.recipe-single-img').css('background','none'); });
			}
		});
	});
	
	//==================================
	
	
	// Slider Call for Accordion Slider
	
	if($('#accordion-slider').length > 0){
		slideMenu.build('accordion-slider',740,10,5,2); 
	}
		
	 
	 
	// Quick Connect Form AJAX validation and submition
	// Validation Plugin : http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// Form Ajax Plugin : http://www.malsup.com/jquery/form/
	var contact_options = { 
       				 	target: '#message-sent',
        				beforeSubmit: function(){
												$('#contact-loader').fadeIn('fast');
												$('#message-sent').fadeOut('fast');
										}, 
       					success: function(){
											$('#contact-loader').fadeOut('fast');
											$('#message-sent').fadeIn('fast');
											$('#contact-form').resetForm();
										}
    	}; 
		
	//==================================
  	
	
	// Contact Form AJAX Function for Contact Page

	$('#contact-form').validate({
		submitHandler: function(form) {
	   		$(form).ajaxSubmit(contact_options);
	   }
	});
	
	//==================================

    // ie 10 css fixes
    //====================================================================
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


    var isAtLeastIE11 = !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/));
    if(isAtLeastIE11 == true) {
        $('body').addClass('ie');
    }
});


	
// Document Ready Function Ends Here
//====================================================================


	// Accordion Slider Function
	var slideMenu=function(){
		var sp,st,t,m,sa,l,w,gw,ot;
		return{
			build:function(sm,sw,mt,s,sl,h){
				sp=s; st=sw; t=mt;
				m=document.getElementById(sm);
				sa=m.getElementsByTagName('li');
				l=sa.length; w=m.offsetWidth; gw=w/l;
				ot=Math.floor((w-st)/(l-1)); var i=0;
				for(i;i<l;i++){s=sa[i]; s.style.width=gw+'px'; this.timer(s)}
				if(sl!=null){m.timer=setInterval(function(){slideMenu.slide(sa[sl-1])},t)}
			},
			timer:function(s){
				s.onmouseover=function(){clearInterval(m.htimer);clearInterval(m.timer);m.timer=setInterval(function(){slideMenu.slide(s)},t)}
				s.onmouseout=function(){clearInterval(m.timer);clearInterval(m.htimer);m.htimer=setInterval(function(){slideMenu.slide(s,true)},t)}
			},
			slide:function(s,c){
				var cw=parseInt(s.style.width);
				if((cw<st && !c) || (cw>gw && c)){
					var owt=0; var i=0;
					for(i;i<l;i++){
						if(sa[i]!=s){
							var o,ow; var oi=0; o=sa[i]; ow=parseInt(o.style.width);
							if(ow<gw && c){oi=Math.floor((gw-ow)/sp); oi=(oi>0)?oi:1; o.style.width=(ow+oi)+'px';
							}else if(ow>ot && !c){oi=Math.floor((ow-ot)/sp); oi=(oi>0)?oi:1; o.style.width=(ow-oi)+'px'}
							if(c){owt=owt+(ow+oi)}else{owt=owt+(ow-oi)}}}
					s.style.width=(w-owt)+'px';
				}else{clearInterval(m.timer);clearInterval(m.htimer)}
			}
		};
		}();
		//==================================

		
		document.addEventListener('DOMContentLoaded', () => {
			// Obtener recetas desde la API
			fetch('/api/recetas')
				.then(response => response.json())
				.then(data => {
					const recetaList = document.getElementById('recetaList');
					
					// Limpiar la lista antes de agregar nuevos elementos
					recetaList.innerHTML = '';
		
					// Recorrer las recetas y agregarlas a la lista
					data.forEach(receta => {
						const li = document.createElement('li');
						li.innerHTML = `
							<h3>${receta.nombre}</h3>
							<img src="${receta.imagen}" alt="${receta.nombre}" style="width: 100px;">
							<p><strong>Descripción:</strong> ${receta.descripcion}</p>
							<p><strong>Ingredientes:</strong> ${receta.ingredientes}</p>
							<p><strong>Pasos:</strong> ${receta.pasos}</p>
						`;
						recetaList.appendChild(li);
					});
				})
				.catch(error => console.error('Error al obtener las recetas:', error));
		});
		
		
		// Función para eliminar receta
		function eliminarReceta(nombre) {
			fetch(`/api/recetas/${nombre}`, {
				method: 'DELETE',
			})
			.then(() => {
				location.reload(); // Recargar la página para actualizar la lista
			});
		}
		
		// Función para editar receta
		function editarReceta(event) {
			event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
		
			const nombre = document.getElementById('nombre').value;
			const imagen = document.getElementById('imagen').value;
			const descripcion = document.getElementById('descripcion').value;
			const ingredientes = document.getElementById('ingredientes').value;
			const pasos = document.getElementById('pasos').value;
		
			const recetaActualizada = {
				imagen: imagen,
				descripcion: descripcion,
				ingredientes: ingredientes,
				pasos: pasos
			};
		
			fetch(`/api/recetas/${nombre}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(recetaActualizada)
			})
			.then(response => {
				if (response.ok) {
					alert('Receta actualizada correctamente');
				} else {
					alert('Hubo un error al actualizar la receta');
				}
			})
			.catch(error => {
				console.error('Error:', error);
				alert('Hubo un problema al conectar con el servidor');
			});
		}
		