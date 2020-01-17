$( document ).ready(function() {
    $(".next").click(
    function(){
      nextPhoto()
    }
    );
});













function nextPhoto() {
  var imageActive = $(".active");
  var nextImageActive = $(".active").next();
  imageActive.removeClass("active");
  nextImageActive.addClass("active");
}
