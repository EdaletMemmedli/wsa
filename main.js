$(document).ready(function() {
  var sec=40;
  for (var i = sec; i >=0; i--) {
    if (i==20) {
      $("#cover").css('background-image', "url('img/cover-bg2.jpg')");
    }
    if (i==10) {
      $("#cover").css('background-image', "url('img/cover-bg3.jpg')");
    }
    if (i==0) {
      i=sec;
    }
  }
});
