// jshint devel:true

$( document ).ready(function() {
    $(".piano-key").click(function() {
      $("#piano-menu").animate({
        marginLeft: "-20%",
        marginRight: "-50%", //invailid
        width: "200%"
      }, 1000).hide(1000);
      $(this).animate({
        paddingLeft: "100%"
      }, 1000, function() {
          $("body").css("background-color", "#2F4F55");
        });
      $("#homepage").animate({
        marginLeft: "0"
      }, 1000);
      $('#side-menu').animate({
        right: "10px"
      }, 1000);
    });
});
