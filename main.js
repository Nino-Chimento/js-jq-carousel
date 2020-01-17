$( document ).ready(function() {
    $(".prev").click(
    function(){
      prevPhoto()
    }
    );
});













function prevPhoto() {
  var imageActive = $(".active");
  var preImageAcrive = $(".active").prev();
  console.log(imageActive);
  console.log(preImageAcrive);
}
