//does not delete divs but fades them out
// $("button").on("click", function () {
//    $("div").fadeOut(1000, function () {
//       console.log("fade completed");
//    });
// });

//removes the divs
// $("button").on("click", function () {
//    $('div').fadeOut(1000, function () {
//       $(this).remove();
//    });
// });

//fadeIn()
// $("button").on("click", function () {
//    $("div").fadeIn(1000, function () {
//       console.log("fade completed");
//    });
// });


//fadeToggle()
$("button").on("click", function () {
   $("div").fadeToggle(500)
});

//slideDown()
$("button").on("click", function () {
   $("div").slideDown();
});

//slideToggle()
//slideUp()