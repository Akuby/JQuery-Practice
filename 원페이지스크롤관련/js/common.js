let n = 1;
let num;
let state = 1;
window.addEventListener('load', () => {
  setTimeout(function () {
    scrollTo(0, 0) // scrollTo는 setTimeOut과 무조건 함께 써야한다.
  })
}, 1)
let scrolling = function (e) {
  let secPos;
  if (e.wheelDelta < 0 && state == 1) { // 휠을 내릴때
    state = 0;
    n++;
    if (n == 4) {
      n = 3;
      state = 1;
    } else {
      secPos = $("#cat" + n).position().top;
      $("html, body").animate({
        scrollTop: secPos
      }, 1000, function () {
        state = 1;
      })
    }
  } else if (e.wheelDelta > 0 && state == 1) {
    state = 0;
    n--;
    if (n < 1) {
      n = 1;
      state = 1;
    } else {
      secPos = $("#cat" + n).position().top;
      $("html, body").animate({
        scrollTop: secPos
      }, 1000, function () {
        state = 1;
      })
    }
  }
  // 휠이벤트 발생시 class on 이동
  console.log(n)
  num = n - 1;
  $("#gnb li").removeClass('on')
  $("#gnb li:eq(" + num + ")").addClass('on')
}
document.addEventListener('wheel', function (e) {
  e.preventDefault();
  scrolling(e)
}, {
  passive: false
})
// wheel 이벤트에서는 preventDefault가 오류로 감지. 감지를 꺼줄 수 있는 passive:false를 준다.
$("#gnb li").on('click', function () {
  $("#gnb li").removeClass('on');
  $(this).addClass('on')
  let idName = $(this).children('a').attr('href')
  let pos = $(idName).position().top;
  $("html, body").stop().animate({
    scrollTop: pos
  }, 1000)
  let idLength = idName.length;
  n = idName.substr(idLength - 1, 1)
})