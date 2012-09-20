$(document).ready(function(){
  $('.answer').hide();
  $('.main h2').toggle(function() { //this targets every h2 in the main class
    $(this).next('.answer').fadeIn(); //this selects h2 that was clicked, next selects tag after selected tag
    $(this).addClass('close');
  },
  function() {
    $(this).next('.answer').fadeOut();
    $(this).removeClass('close');
  }
  ); //end toggle
}); //end ready