$('#gnb').on('mouseenter', function() {
  $('#header').addClass('on')
})

$('#header').on('mouseleave',function() {
  $('#header').removeClass('on')
})
let onPlay = true;
const bgVideo = document.getElementById('video')
$("#videoBtn").on('click', function() {
  if ( onPlay == true ){
    bgVideo.pause(); // 제이쿼리는 비디오 선택자 사용 불가
    $(this).text('play').css({backgroundColor:'rgba(255, 255, 255, 0.33)'})
    onPlay = false;
  }
  else {
    bgVideo.play();
    $(this).text('stop').css({backgroundColor:'transparent'})
    onPlay = true;
  }
})
