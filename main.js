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

$(document).keydown(
  function () {
    var imageActive = $(".images .active");
    var nextImageActive = $(".images .active").next();
    // var circle
    var circleActive = $(".nav .active");
    var nextCircleActive = circleActive.next();
    var  imageActive = $(".images .active");
    var prevImageActive = $(".images .active").prev();
    // var circleActive
    var circleActive = $(".nav .active");
    var prevCircleActive = circleActive.prev();
    console.log(event.which);
    if (event.which == 39 && imageActive.hasClass("last")==true ) {
      imageActive.removeClass("active");
      $("img").first().addClass("active");
      circleActive.removeClass("active");
      $(".nav .first").addClass("active")
    }
    else if (event.which == 39) {
      console.log("m");
      imageActive.removeClass("active");
      nextImageActive.addClass("active");
      // pallini
      circleActive.removeClass("active");
      nextCircleActive.addClass("active");
    }
    else if (event.which == 37 && imageActive.hasClass("first")== true) {
      imageActive.removeClass("active");
      $("img").last().addClass("active");
      circleActive.removeClass("active");
      $(".nav i").last().addClass("active");
    }
    else if (event.which == 37) {
      imageActive.removeClass("active");
      prevImageActive.addClass("active");
      circleActive.removeClass("active");
      prevCircleActive.addClass("active");
    }
  }
)
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
  else {
    imageActive.removeClass("active");
    prevImageActive.addClass("active");
    circleActive.removeClass("active");
    prevCircleActive.addClass("active");
  }
}


// $("i").click(
//   function(){
//     var circleActive = $(".nav .active");
//     var imageActive = $(".images .active");
//     var listaCircle = $(".fa-circle");
//     var listaImg =$("img");
//     var posizione = $(this).index();
//
//     var appare = $("img")[posizione]
//     $(this).addClass("active");
//     circleActive.removeClass("active");
//     imageActive.removeClass("active");
//     $("img").eq(posizione).addClass("active")
//   }
// );
