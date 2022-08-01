$(function () {
  $('header h1').animate({
    opacity: 1
  }, 1000);
  $('header h2').delay(500).animate({ // jQuery에서는 setTimeout대신 delay 사용 가능
    opacity: 1
  }, 1000)
  // setTimeout(() => {
  //   $('header h2').animate({
  //     opacity: 1
  //   }, 1000);
  // }, 500);
})

// $('#content div').on(function(e) {
//   if(e.scrollY >= 850) {
//     $(this).animate({opacity:1, marginTop:'0px'}, 1000);
//   }
// })
let posTop = $(window).height() - 400;
let state = 1; // 스크롤 이벤트는 한번에 12번씩이나 발생하기 때문에, 이를 막아줄 throttle 역할
$(window).scroll(function () {
  let scroll = $(document).scrollTop();
  if (scroll >= posTop && state == 1) {
    state = 0;
    $('#content div').each(function() {
      $(this).delay($(this).index() * 200).animate({
        opacity: 1,
        marginTop: 0
      }, 500);
    })
  } else if (scroll <= posTop-500 && state == 0) {
    $('#content div').animate({
      opacity: 0,
      marginTop: 200
    }, 500)
    state = 1;
  }
});