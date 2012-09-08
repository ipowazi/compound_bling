$(document).ready(function(){
	$('h1').hide().fadeIn(1000);
	
	$("#navigation").navPlugin({
	   'itemWidth': 150,
	   'itemHeight': 30,
	   'navEffect': "slide",
	   'speed': 250
	}); //end navPlugin
}); //end ready