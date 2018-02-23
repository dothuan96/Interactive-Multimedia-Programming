$(document).ready(function(){
  $('h2').animate({top: '0px', opacity: 1}, 1000);
  $('.form').animate({left:'0px', opacity: 1}, 1000);

  $("button").click(function(){
    $("p").toggleClass("blue");
  });
});
