$("section article ul").not($("section article:first ul")).hide();
$('article h3').on('click', function() {
  $('section article ul').hide();
  $('section article h3').removeClass('on');
  $(this).next().show();
  $(this).addClass('on')
})