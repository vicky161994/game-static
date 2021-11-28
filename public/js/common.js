$(document).scroll(function () {
  var screenWidth = $(window).width();
  if (screenWidth > 991) {
    var y = $(this).scrollTop();
    console.log("scroll is: " + y);
    if (y > 700 && y < 3700) {
      $(".scroll-content").fadeIn();
    } else {
      $(".scroll-content").fadeOut();
    }
  }
});
