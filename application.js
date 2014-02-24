$(document).ready(function() {
	console.log("js ready");
	$('#menu-button').click(function() {
		console.log("clicked");
		// $('.nav').toggleClass( "hidden" );
		$(".nav").slideDown();
	});
});