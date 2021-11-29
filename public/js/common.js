$(document).scroll(function () {
  var screenWidth = $(window).width();
  if (screenWidth > 991) {
    var y = $(this).scrollTop();
    console.log("scroll is: " + y);
    if (y > 1200 && y < 4400) {
      $(".scroll-content").fadeIn();
    } else {
      $(".scroll-content").fadeOut();
    }
  }
});
