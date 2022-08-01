$('#gnb li a, #header a, a.top').on('click', function(e) {
  e.preventDefault()
  let pos = $($(this).attr('href')).position().top;
  $('html, body').stop().animate({scrollTop:pos-$('#gnb').height()}, 1000)
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