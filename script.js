$(document).ready(function(){
  $(".show").on('click',function(){
    $(".invisible").removeClass("invisible");
    $(this).addClass("invisible");
  });
});
