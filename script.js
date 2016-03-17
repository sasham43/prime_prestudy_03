$(document).ready(function(){

  // show resume when clicked
  $(".show").on('click',function(){
    $(".invisible").animate(
      {opacity: 1}
    );
    $(this).css({"display": "none"});
  });

  // show content when header is clicked
  $("section").on("click", function(){
    $(this).find(".container").slideToggle("fast");
  });
});
