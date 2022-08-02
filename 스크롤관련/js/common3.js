// 각 섹션 위치 - 300 정도에 스크롤 시 나타나도록
$(window).scroll(function() {
  let docPos = $(document).scrollTop();
  $('section').each(function() {
    if (docPos > $(this).position().top - 400) { // each() 를 사용해 각각의 섹션에 애니메이션을 줄 수 있다.
      $(this).children('h2').stop().animate({opacity:1}, 500)
    } else if ( docPos <= $(this).position().top - $(window).height() ) {
      $(this).children('h2').css({opacity:0})
    }
  })
  // let scroll = $(document).scrollTop();
  // if (scroll >= $('#content1').position().top - 500) {
  //   $('#content1 h2').animate({opacity : 1})
  // }
  // if (scroll >= $('#content2').position().top - 500) {
  //   $('#content2 h2').animate({opacity : 1})
  // }
  // if (scroll >= $('#content3').position().top - 500) {
  //   $('#content3 h2').animate({opacity : 1})
  // }
})