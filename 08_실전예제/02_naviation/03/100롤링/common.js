let sList = $("#sliderList");
let liLength = $("#sliderList li").length;
let num = 0;
let state = 1;
let prevSlider = function () {
  num--;
  if (num == -1) {
    num = liLength-1;
    sList.prepend($("li:last", sList))
      .css({
        marginLeft: `-100%`
      })
      .animate({
        marginLeft: 0
      }, function () {
        for (let i = 0; i < liLength - 1; i++) {
          sList.prepend($("li:last", sList))
        }
          sList.css({
            marginLeft: `-${(liLength-1)*100}%`
          })
          state = 1;
      })
  } else {
    sList.not(":animated").animate({
      marginLeft: "+=100%"
    }, 500, function() {
      state = 1;
    })
  }
  $("#numBtn a").removeClass('active');
  $("#numBtn a:eq(" + num + ")").addClass('active')
}
let nextSlider = function () {
  num++;
  if (num == liLength) {
    num = 0;
    sList.append($("li:first", sList))
      .css({
        marginLeft: `-${(liLength-2)*100}%`
      })
      .animate({
        marginLeft: `-${(liLength-1)*100}%`
      }, function () {
        for (let i = 0; i < liLength - 1; i++) {
          sList.append($("li:first", sList))
        }
        sList.css({
          marginLeft: 0
        })
        state = 1;
      })
  } else {
    sList.not(":animated").animate({
      marginLeft: "-=100%"
    }, 500, function() {
      state = 1;
    })
  }
  $("#numBtn a").removeClass('active');
  $("#numBtn a:eq(" + num + ")").addClass('active')
}
let timer = setInterval(nextSlider, 3000)

$(".prevBtn").on('click', function (e) {
  if(state == 1) {
    state = 0;
  prevSlider();
  }
})
$(".nextBtn").on('click', function (e) {
  if(state == 1) {
    state = 0;
    nextSlider();
  }
})
$("#numBtn a").on('click', function (e) {
  $("#numBtn a").removeClass('active');
  $(this).addClass('active')
  num = $(this).index();
  sList.animate({
    marginLeft: `${num*(-100)}%`
  }), 1000
})
$("#posBtn a, #numBtn a").on('click', function (e) {
  e.preventDefault();
  clearInterval(timer);
  timer = setInterval(nextSlider, 3000);
})