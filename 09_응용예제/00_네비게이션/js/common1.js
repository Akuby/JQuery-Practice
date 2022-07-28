$('.depth1 > li').hover(function() {
  $(this).children('.depth2')
  .stop()
  .css({display:'block', opacity:0, top:30})
  .animate({opacity:1, top:80}, 200)
}, function() {
  $(this).children('.depth2').animate({opacity:0, top:30}, 200)
})
