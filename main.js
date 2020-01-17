$( document ).ready(function() {
    $(".next").click(
    function(){
      nextPhoto()
    }
    );
});













function nextPhoto() {
  // var images
  var imageActive = $(".images .active");
  var nextImageActive = $(".images .active").next();
  // var circle
  var circleActive = $(".nav .active");
  var nextCircleActive = circleActive.next();
  imageActive.removeClass("active");
  nextImageActive.addClass("active");
  circleActive.removeClass("active");
  nextCircleActive.addClass("active");
}
