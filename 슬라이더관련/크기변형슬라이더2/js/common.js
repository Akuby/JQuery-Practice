$('#sliderList').prepend($('#sliderList li:last'))
$('#sliderList li').not($('#sliderList li:eq(1)')).css({opacity:0.5})
let state = 1;
let nextSliding = function() {
  if (state == 1) {
    state = 0;
    $("#sliderList").animate({ marginLeft: -1200 }, 1000, function() {
      $("#sliderList").append($('#sliderList>li:first')).css({marginLeft: -600});
      state = 1;
    });
    $("#sliderList li:eq(1)").animate({ width: 600, height: 500, marginTop: 100, opacity: 0.5 }, 1000);
    $("#sliderList li:eq(2)").animate({ width: 1200, height: 700, marginTop: 0, opacity:1 }, 1000);
  }
}
let prevSliding = function() {
  if (state == 1) {
    state = 0;
    $('#sliderList li:eq(1)').animate({ width: 600, height: 500, marginTop: 100, opacity: 0.5}, 1000); // prev에선 얘를 prepend 뒤에 적으니까 실행이 안된다.. 왜지?
    $("#sliderList li:eq(0)").animate({ width: 1200, height: 700, marginTop: 0, opacity:1 }, 1000);
    $('#sliderList').prepend($('#sliderList>li:last')).css({marginLeft:-1200}).animate({marginLeft: -600}, 1000, function() {
      state = 1;
    });
  }
}
$(".next").on('click', nextSliding)
$('.prev').on('click', prevSliding)
