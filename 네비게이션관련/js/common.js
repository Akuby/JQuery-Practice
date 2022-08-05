let resizing = function() {
  if ( $(window).width() >= 1000 ) {
    $('#gnbList .snb').css({display: 'block'})
  } else {
    $('#gnbList .snb').css({display: 'none'})
    $('#gnb').removeClass('mobile')
  }
}

resizing(); // 요소들을 '안정적으로 적용하기 위해서는' 처음 로드 시에도 실행해야함
$(window).on('resize', resizing)

// for desktop
$('#gnb').on('mouseenter', function () {
  $('#header').addClass('on')
}).on('mouseleave', function () {
  $('#header').removeClass('on')
})
// for mobile
$('.gnbView').on('click', function () {
  $('#gnb').toggleClass('mobile') // class를 사용하면 toggleClass로 훨씬 쉽게 구현 가능
})

$('#gnb .item').on('click', function () {
  $(this).children('.snb').slideToggle().parent().siblings().children('.snb').slideUp();
})