$('.depth2').hide()
$('.depth1>li').hover(function(){
  $('#header').prepend('<div class="on"></div>');
  $(this).children('.depth2').stop().fadeIn(200)
},function(){
  $(this).children('.depth2').stop().fadeOut(200)
})
$('#gnb').hover(function(){
  $('#header').prepend('<div class="on">');
  $('.on').animate({opacity: 1}, 200)
},function(){
  $('.on').animate({opacity: 0}, 200, function() {
    $(this).remove()
  })
})