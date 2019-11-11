// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded

$(document).ready(function(){

// Prevent the page jumping when the anchor is clicked with the event.preventDefault() function

$('a').click(function(event) {
    event.preventDefault();
});

// Selecting the DOM elements  in nav bar and sidebar with CSS selectors 
// upon a user's click using the .click() handler and displaying an .alert

$('nav').click(function() {
    alert('Handler for .click() called.');
  });

  $('.sidebar ul').click(function() {
    $('nav').click();
  });

// a click on readmore text makes <p> tag slide down along with a "Read Less" link 
// using $.slideDown() and $.show(). Readmore is hidden

$('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    $('a').show();  
    $('.readmore').hide();
});

// clicks "Read Less" make the <p> slide up and hide the "Read Less" link using $.slideUp() and $.hide()
// show the "Read More" link using $.show()

$('.readless').click(function(){
    $('#show-this-on-click').slideUp();
    $('.post a').show();
    $('.hide').hide();
});

// clicking on the "Learn More" link in the sidebar, makes the <span> inside that <p> slide down 
// and hides the "Learn More" link 

$('.sidebar').click(function(){
    alert('sidebar element has been clicked');
    $('span').slideDown();
    $('.learnmore').hide();
});



});