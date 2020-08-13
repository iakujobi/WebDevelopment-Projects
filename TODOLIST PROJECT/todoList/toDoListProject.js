//Check off Specific Todos By Clicking

$("ul").on("click", "li", function () {
   $(this).toggleClass("completed");
});

//Click on X to delete Todo

$("ul").on("click", "span", function (event) {
   //span(this); li; fadeOut on li
   $(this).parent().fadeOut(500, function () {
      //removes the li(this)
      $(this).remove();
   });
   //prevents it from bubbling to other elements
   event.stopPropagation();
});

//click for keypress
$("input[type = 'text']").keypress(function (event) {
   //13 is the number for the ENTER key
   if (event.which === 13) {
      //grab new Todo text from input
      var todoText = $(this).val();
      //to clear the input
      $(this).val("");
      //create new li and add to ul
      $("ul").append("<li><span> <i class='fas fa-trash-alt'></i> </span> " + todoText + "</li>")
   }
});


//Fade input in-and-out
$(".fa-pencil-alt").click(function () {
   $("input[type = 'text']").fadeToggle();
});
