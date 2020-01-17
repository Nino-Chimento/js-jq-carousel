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
  console.log("n");
}
