    /* 할 일 목록

		Tip1. position: absolute의 적용으로 보이는 순서는 아래그림부터

		Tip2. 클래스 active로 인해 첫번째 그림이 보이고 있음

		1. 두번째 이미지가 전환되어 보이도록 하기 위해 클래스 active 추가

		2. animate()를 이용해 이펙트 적용

		3. 이펙트 적용시 첫번째 그림은 클래스 #sliderList내 마지막으로 이동하고,
			동시에 클래스 네임 삭제

		*/

    $('.next').on('click', function() {
      $('#sliderList li:eq(1):not(:animated)').addClass('active').css({opacity:0}).animate({opacity:1}, 500, function() {
        $('#sliderList').append($('#sliderList li:eq(0)')).children('li:last').removeClass('active')
      })
    })
    $('.prev').on('click', function() {
      $('#sliderList li:last:not(:animated)').addClass('active').css({opacity:0}).animate({opacity:1}, 500, function() {
        $('#sliderList').prepend($('#sliderList li:last')).children('li:eq(1)').removeClass('active')
      })
    })

    $('#btnNum a').on('click', function(e) {
      e.preventDefault();
      $('#btnNum a').removeClass('on');
      $(this).addClass('on');
    })
