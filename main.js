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
  if (imageActive.hasClass("last")) {
    imageActive.removeClass("active");
    $("img").first().addClass("active");
    circleActive.removeClass("active");
    $(".nav .first").addClass("active")
  }
  // image
  imageActive.removeClass("active");
  nextImageActive.addClass("active");
  // pallini
  circleActive.removeClass("active");
  nextCircleActive.addClass("active");

}
