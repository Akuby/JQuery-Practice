    let liLength = $('#sliderList li').length;
    let classNum; // 화살표 클릭 시 번호 버튼 클래스 변경
    let state = 1; // 빠른 클릭 방지

    $('.next').on('click', function () {
      if (state == 1) {
        state = 0;
        nextSlider(500);
      }
    })
    $('.prev').on('click', function () {
      if (state == 1) {
        state = 0;
        prevSlider(500);
      }
    })

    let timer = setInterval(function() {
      nextSlider(1000)
    }, 8000);

    $('#btnNum a').on('click', function () {
      if (state == 1) {
        state = 0;
        let num = $(this).index() + 1
        if ($('.slider' + num).hasClass('active')) { // 현재 슬라이드 번호 클릭 시
          state = 1;
          return;
        }
        $('#btnNum a').removeClass('on');
        $(this).addClass('on');
        $(`.slider${num}`).addClass('active').css({
          opacity: 0
        }).animate({
          opacity: 1
        }, 500, function () {
          $('#sliderList li').not($(this)).removeClass('active')
          for (let i = 0; i < liLength - 1; i++) {
            num++;
            if (num == 5) {
              num = 1
            };
            $('#sliderList').append($(`.slider${num}`));
          }
          state = 1;
        });
      }
    })

    $('#btnPos a, #btnNum a').on('click', function (e) {
      e.preventDefault();
      clearInterval(timer);
      timer = setInterval(function() {
        nextSlider(1000)
      }, 8000);
    })

    function nextSlider (time) {
      classNum = $('#sliderList li:first').attr('class').substr(13, 1);
      if (classNum == liLength) {
        classNum = 0
      }
      $('#btnNum a').removeClass('on');
      $(`#btnNum a:eq(${classNum})`).addClass('on')
      $('#sliderList li:eq(1):not(:animated)').addClass('active').css({
        opacity: 0
      }).animate({
        opacity: 1
      }, time, function () {
        $('#sliderList').append($('#sliderList li:eq(0)')).children('li:last').removeClass('active');
        state = 1;
      })
    }

    function prevSlider (time) {
      classNum = $('#sliderList li:last').attr('class').substr(13, 1) - 1;
      $('#btnNum a').removeClass('on');
      $(`#btnNum a:eq(${classNum})`).addClass('on')
      $('#sliderList li:last:not(:animated)').addClass('active').css({
        opacity: 0
      }).animate({
        opacity: 1
      }, time, function () {
        $('#sliderList').prepend($('#sliderList li:last')).children('li:eq(1)').removeClass('active');
        state = 1;
      })
    }