let sList = $("#sliderList");
let num = 0;
let prevSlider = function () {
  num--;
  if (num == -1 ) {
    num = 2;
    sList.prepend($('.slider3')).prepend($('.slider2')) // 하나만 먼저 보내고, 콜백으로 남은 하나 보낼 수도 있다.
    .css({
      marginLeft : '-200%'
    })
    .animate({
      marginLeft:'-100%'
    }, 1000, function() {
      sList.prepend($('.slider1'))
      .css({marginLeft:'-200%'})
    })
  } else {
    sList.not(":animated").animate({
      marginLeft:"+=100%"
    }, 1000)
  }
}
let nextSlider = function () {
  num++;
  if (num == 3) {
    num = 0;
    sList.append($(".slider1")).append($(".slider2"))
      .css({
        marginLeft: 0
      })
      .animate({
        marginLeft: "-100%"
      }, 1000, function () {
        sList.append($(".slider3")).css({
          marginLeft: 0
        })
      })
  } else {
    sList.not(":animated").animate({
      marginLeft: "-=100%"
    }, 1000)
  }
}

$(".prevBtn").on('click', function (e) {
  prevSlider();
})
$(".nextBtn").on('click', function (e) {
  nextSlider();
})
$("#numBtn a").on('click', function (e) {
  num = $(this).index();
  sList.animate({
    marginLeft: `${num*(-100)}%`
  }), 1000
})

$("#posBtn a, #numBtn a").on('click', function (e) {
  e.preventDefault();
})