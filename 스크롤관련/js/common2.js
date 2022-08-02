$('#gnb li a, #header a, a.top').on('click', function (e) { // 각각의 함수를 만들기보다, 모두 a태그를 끼고 있기 때문에 대상을 a로 하고 css를 조정해주었다.
  e.preventDefault()
  let pos = $($(this).attr('href')).position().top;
  $('html, body').stop().animate({
    scrollTop: pos - $('#gnb').height()
  }, 1000)
})

// window에 스크롤 이벤트가 발생 시 #content1의 위치에서 gnb가 고정되도록
$(window).scroll(function () {
  let scroll = $(document).scrollTop();
  if (scroll >= $('#header').innerHeight()-50) {
    $('#gnb').addClass('on');
  } else {
    $('#gnb').removeClass('on')
  }

})

// 가장 바닥으로 왔을 때, top 버튼이 나타나도록

// let posTop = $(window).height();
// let state = 1;
// $(window).scroll(function () {
//   let scroll = $(document).scrollTop();
//   if (scroll >= posTop && state == 1) {
//     state = 0;
//     $('#content div').each(function() {
//       $(this).delay($(this).index() * 200).animate({
//         opacity: 1,
//         marginTop: 0
//       }, 500);
//     })
//   } else if (scroll <= posTop-500 && state == 0) {
//     $('#content div').animate({
//       opacity: 0,
//       marginTop: 200
//     }, 500)
//     state = 1;
//   }
// });