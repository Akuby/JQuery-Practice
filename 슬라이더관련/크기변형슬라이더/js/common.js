$(".next").on('click', function() {
  $("#sliderList").animate({ marginLeft: -600 }, 1000, function() {
    $(this).append($('>li:first', this)).css({ marginLeft: 0 })
    $("#sliderList li").css({ opacity: 1 })
  })
  $("#sliderList li:eq(0)").animate({ width: 600, height: 500, marginTop: 100, opacity: 0 }, 1000)
  $("#sliderList li:eq(1)").animate({ width: 1200, height: 700, marginTop: 0 })
})
