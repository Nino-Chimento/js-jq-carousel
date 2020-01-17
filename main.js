$( document ).ready(function() {
    $(".next").click(
    function(){
      nextPhoto()
    }
    );
    $(".prev").click(
      function(){
        prevPhoto()
      }
    );
});

// funzione next photos
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
  else {
    // image
    imageActive.removeClass("active");
    nextImageActive.addClass("active");
    // pallini
    circleActive.removeClass("active");
    nextCircleActive.addClass("active");
  }
}
// funzione prevPhoto
function prevPhoto() {
  var  imageActive = $(".images .active");
  var prevImageActive = $(".images .active").prev();
  // var circleActive
  var circleActive = $(".nav .active");
  var prevCircleActive = circleActive.prev();
  if (imageActive.hasClass("first")) {
      imageActive.removeClass("active");
      $("img").last().addClass("active");
      circleActive.removeClass("active");
      $(".nav i").last().addClass("active");
  }
}
