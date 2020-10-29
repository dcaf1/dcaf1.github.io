



function fecha(){
    fecha = new Date();
    mes = fecha.getUTCMonth() + 1;
    dia = fecha.getUTCDate();
    año = fecha.getUTCFullYear();

    fechax = dia + "/" + mes + "/" + año; 

    document.getElementById('fecha').innerHTML = fechax;
}


function hora(){
    time = new Date();
    hora = time.getHours();
    minuto = time.getMinutes();
    segundo = time.getSeconds();

    timex = hora + ":" + minuto + ":" + segundo;

    document.getElementById('hora').innerHTML = timex;

}

<!-- 🍎 IMAGENES MODAL -->

$(document).ready(function(){

$(".boton-abrir").click(function(){$(".modal").fadeIn("300");});$(".boton-cerrar").click(function(){$(".modal").fadeOut("300");});
$(".boton-abrir1").click(function(){$(".modal1").fadeIn("300");});$(".boton-cerrar1").click(function(){$(".modal1").fadeOut("300");});
$(".boton-abrir2").click(function(){$(".modal2").fadeIn("300");});$(".boton-cerrar2").click(function(){$(".modal2").fadeOut("300");});
$(".boton-abrir3").click(function(){$(".modal3").fadeIn("300");});$(".boton-cerrar3").click(function(){$(".modal3").fadeOut("300");});
$(".boton-abrir4").click(function(){$(".modal4").fadeIn("300");});$(".boton-cerrar4").click(function(){$(".modal4").fadeOut("300");});
$(".boton-abrir5").click(function(){$(".modal5").fadeIn("300");});$(".boton-cerrar5").click(function(){$(".modal5").fadeOut("300");});
$(".boton-abrir6").click(function(){$(".modal6").fadeIn("300");});$(".boton-cerrar6").click(function(){$(".modal6").fadeOut("300");});
$(".boton-abrir7").click(function(){$(".modal7").fadeIn("300");});$(".boton-cerrar7").click(function(){$(".modal7").fadeOut("300");});
$(".boton-abrir8").click(function(){$(".modal8").fadeIn("300");});$(".boton-cerrar8").click(function(){$(".modal8").fadeOut("300");});
$(".boton-abrir9").click(function(){$(".modal9").fadeIn("300");});$(".boton-cerrar9").click(function(){$(".modal9").fadeOut("300");});

$(".boton-abrira").click(function(){$(".modala").fadeIn("300");});$(".boton-cerrara").click(function(){$(".modala").fadeOut("300");});
$(".boton-abrirb").click(function(){$(".modalb").fadeIn("300");});$(".boton-cerrarb").click(function(){$(".modalb").fadeOut("300");});
$(".boton-abrirc").click(function(){$(".modalc").fadeIn("300");});$(".boton-cerrarc").click(function(){$(".modalc").fadeOut("300");});
$(".boton-abrird").click(function(){$(".modald").fadeIn("300");});$(".boton-cerrard").click(function(){$(".modald").fadeOut("300");});
$(".boton-abrire").click(function(){$(".modale").fadeIn("300");});$(".boton-cerrare").click(function(){$(".modale").fadeOut("300");});
$(".boton-abrirf").click(function(){$(".modalf").fadeIn("300");});$(".boton-cerrarf").click(function(){$(".modalf").fadeOut("300");});

});

<!-- 🍎 IMAGENES MODAL FIN -->





(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)',
		mobilep: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right'
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		0.5,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});

})(jQuery);