$(".mnu1").on("click", function() {
  $(".sub1").toggle();
});

$(".mnu2").on("click", function() {
  $(".sub2").toggle();
});

$(".mnu3").on("click", function() {
  $(".sub3").toggle();
});

$(".mnu4").on("click", function() {
  $(".sub4").toggle();
});

$("h3").click(function() {
    $("h3").css("color","gray")
     $(this).css("color","black")
});

$("#da").click(function() {
    $("#da").css("color","lightgray")
     $(this).css("color","white")
});
