$("#header").load("./layout/header.html");
$("#content").load("../../screen.html");
$("#footer").load("./layout/footer.html");
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

function toggleSocialIconList() {
  var elms = document.getElementsByClassName("share-icon-box");
  Array.from(elms).forEach((x) => {
    if (x.style.display === "") {
      x.style.display = "block";
    } else if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
}
