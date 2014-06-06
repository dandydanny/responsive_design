$(document).ready(function() {
	console.log("js ready");
	$('#menu-button').click(function() {
		console.log("clicked");
		// $('.nav').toggleClass( "hidden" );
		$('.nav').removeClass( "hidden" );
		$('.nav').addClass( "show" );
		// $(".nav").slideDown();
	});
	$('.nav').click(function() {
		console.log("clicked while open");
		// $('.nav').toggleClass( "hidden" );
		$('.nav').removeClass( "show" );
		$('.nav').addClass( "hidden" );
		// $(".nav").slideUp();
	});
});