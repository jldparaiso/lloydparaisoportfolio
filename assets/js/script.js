$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 10);
});

$('.carousel').carousel({
  interval: 1000
});