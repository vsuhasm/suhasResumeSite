$(document).ready(function(){
	$(window).bind('scroll', function(){
	    var offset = $(document).scrollTop();
	    var opac = 0.1 + (offset/200);
	    $("#background").fadeTo(0.1, opac);
	});
});

