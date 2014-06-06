$(document).ready(function() {
	console.log("js ready");
	$('#menu-button').click(function() {
		console.log("clicked");
		// $('.nav').toggleClass( "hidden" );
		$('.body').removeClass( "shift-in" );
		$('.body').addClass( "shift-out");
		// $('.nav').removeClass( "hidden" );
		// $('.nav').addClass( "show" );
		// $(".nav").slideDown();
	});
	$('.nav').click(function() {
		console.log("clicked while open");
		// $('.nav').toggleClass( "hidden" );
		$('.body').removeClass( "shift-out" );
		$('.body').addClass( "shift-in" );
		// $('.nav').removeClass( "show" );
		// $('.nav').addClass( "hidden" );
		// $(".nav").slideUp();
	});
});