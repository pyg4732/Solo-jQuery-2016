$(document).ready(function() {

 $('button').on('click', function() {
   $('.color-cube').css('background', $(this).attr('data-color'));
    $('.container').append('<div class="color-cube"></div>');

 });


});
