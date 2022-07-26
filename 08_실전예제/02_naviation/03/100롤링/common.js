const prevSlider = function () {
  $('#sliderList:not(:animated)').prepend($('#sliderList li:last')).css({marginLeft:'-100%'}).animate({marginLeft:0}, 1000)
}
const nextSlider = function () {
  $('#sliderList:not(:animated)').animate({marginLeft:'-100%'}, 1000, function() {
    $(this).append($('>li:first',this)).css({marginLeft:0})
  });
  
}
$('.prevBtn').on('click', function() {
  prevSlider();
})
$('.nextBtn').on('click', function() {
  nextSlider();
})
$('#posBtn a, #numBtn a').on('click', function(e) {
  e.preventDefault();
})