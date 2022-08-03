$('ul li').on('click', function () {
  $('nav ul li').removeClass('on');
  $(this).addClass('on');
  let pos = $($(this).children('a').attr('href')).position().top;
  $('html, body').stop().animate({scrollTop: pos}, 500)
})