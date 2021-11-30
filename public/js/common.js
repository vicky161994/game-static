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

const targetDiv = document.getElementById("share_icon_list");
const btn = document.getElementById("share_button");
btn.onclick = function () {
  if (targetDiv.style.display === "") {
    targetDiv.style.display = "block";
  } else if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};
