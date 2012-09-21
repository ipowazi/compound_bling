$(document).ready(function(){
	$('.answer_hide').toggle(
		function(){
			$(this).attr('class', 'answer_show')
		}, 
		function(){
			$(this).attr('class', 'answer_hide')
		}
	); //end toggle	
}); //end ready