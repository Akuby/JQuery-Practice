$(document).on('mousemove', function(e) {
  let bgX = ($(window).width()*0.5 - e.pageX)*0.03 - $(window).width() * 0.1; 
  let bgY = ($(window).height()*0.5 - e.pageY)*0.03- $(window).height() * 0.1;
  $('div').css({left:bgX, top:bgY})
})