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


// script로 집어넣은 클래스는 같은 script에서 인식하지 못한다.
// 이를 위해 jquery의 구버전용 live 문법 대신, 아래의 신규 문법을 사용한다.
// 대상 자리에 document를 넣어주고, 이벤트 뒤에 대상을 삽입한다.
// $(document).on('이벤트', '대상', 실행할 함수)
$(document).on('click', '#gnb.mobile .item', function () {
  $(this).children('.snb').slideToggle().parent().siblings().children('.snb').slideUp();
})