$(document).ready(function(){

$('a').click(function(event) {
    event.preventDefault();
});

$('nav').click(function() {
    alert('Handler for .click() called.');
  });

  $('.sidebar ul').click(function() {
    $('nav').click();
  });

$('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    $('a').show();  
    $('.readmore').hide();
});

$('.readless').click(function(){
    $('#show-this-on-click').slideUp();
    $('.post a').show();
    $('.hide').hide();
});

$('.sidebar').click(function(){
    alert('learn more clicked');
    $('span').slideDown();
    $('.learnmore').hide();
});
























});