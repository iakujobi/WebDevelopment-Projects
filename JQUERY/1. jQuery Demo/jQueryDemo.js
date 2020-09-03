

// select all the h1 and li
$("h1");

$("li");

// to select the anchor (a) tag
$("a");
$("li a");
$("ul li a");

//to select the id
$("#adorable");

// Manipulating Style - the .css() method is jQuery's interface to styling
$("h1").css("color", "yellow");
///another way to change the color of the h1
document.querySelector("h1").style.color = "orange";
///a wau to change h1 styling
var styles = {
   color: "red";
   background: "pink";
   border: "2px solid purple";
}
$("h1").css(styles);
//make all lis blue
$("li").css("color", "blue");

//to change all lis to green without jQuery(aka VANILLA JS)
var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++){
   lis[i].style.color = "green";
}

//change font-size anchor tags 
$("a").css("font-size", "40px");

//another way
$("li").css({
   fontSize: "10px",
   border: "3px dashed purple",
   background: "rgba(89, 45, 20, 0.5)"
});