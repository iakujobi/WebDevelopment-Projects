//click() method - is a quick and easy way to add a click listener to elements

//used to check jQuery is connected 
// console.log(jQuery);

// $("h1").click(function () {
//    alert("h1 clicked");
// });

// $("button").click(function () {
//    $(this).css("background", "pink");
// });


// $("button").click(function () {
//    var text = $(this).text();
//    console.log("You clicked " + text);
// });

// //keypress()- used to specify the text that was pressed on the keyboard
// //input from user
// // $("input");
// // //listens for a key press
// // $("input").keypress(function () {
// //    console.log("You pressed a key!");
// // });

// //
// $("input").keypress(function (event) {
//    console.log(event);
// });

// //which - tells us the code ascribed to a certain keyboard key
// $("input").keypress(function (event) {
//    if (event.which === 13) {
//       alert("You hit enter!!");
//    }
// });


//on() - works similarly to addEventListener. it lets you specify the type of event to listen for
//we have to remove all previous event listeners


//click() and on('click) will both get the job done. However, there is one key difference: -click() only adds listeners for existing elements; -on() will add listeners for all potential future elements

//all h1's will change color
$("h1").on("click", function () {
   $("h1").css("color", "purple");
});

//only the selected h1 will change color
$("h1").on("click", function () {
   $(this).css("color", "purple");
});

//
$("input").on("keypress", function () {
   console.log("Key pressed");
});

//mouseenter - when you move the mouse (hover) over the item
$("button").on("mouseenter", function () {
   console.log("Mouse Enter!");
});

//
$("button").on("mouseenter", function () {
   $(this).css("font-weight", "bold");
});

//mouseleave - remove code when we hover away
$("button").on("mouseleave", function () {
   $(this).css("font-weight", "normal");
});