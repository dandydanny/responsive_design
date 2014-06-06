$(document).ready(function() {
	console.log("js ready");
	// $('.body').addClass( "initial" );


	$('#menu-button').click(function() {
		console.log("hamburger clicked");
		$('.body').removeClass( "initial" );

		// Special case for the very first hamburger click,
		// Show nav, shift-out .body
		if (!$('.body').hasClass( "shift-out" ) && !$('.body').hasClass( "shift-in" )) {
			$('.nav').removeClass( "hidden" )
			$('.body').addClass( "shift-out" );
			return;
		}

		// Subsequent clicks, we'll just toggle the shift-out and shift-in
		$('.body').toggleClass( "shift-out");
		$('.body').toggleClass( "shift-in" );
		
	});


	$('.nav').click(function() {
		console.log("clicked while open");
		$('.body').removeClass( "shift-out" );
		$('.body').addClass( "shift-in" );
	});
});