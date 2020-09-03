//to check if jQuery is correctly added to my text
console.log(jQuery);
//all the text of h1, ul
$("h1").text();

$("ul").text();

//strips the formats of li and returns only the text
$("li").text();

//changes h1 text to "New text"
$("h1").text("New text");

//prints the html contents inside of the ul
$("ul").html();
//change value inside the ul
$("ul").html("<li> Hacked your UL!! </li> <li> I'm the best! </ul>");
//update li with anchor tag
$("li").html("<a href='google.com'>CLICK ME TO GO TO GOOGLE</a>");

//check the img width
$('img').css("width");
//change img width
$('img').css("width", "200px");
//attr() - used to access a particular attribute
//check the source(src) of the img
$('img').attr("src");
//change the img to another img
$('img').attr("src", "https://personal.psu.edu/xqz5228/jpg.jpg");

//check input called type of text
$("input").attr("type");
//change input type of text to color
//$("input").attr("type", "color");

//to change first img
$("img:first-of-type").attr("src", "some image jpeg");

//to change last img
$("img").last().attr("src", "the new img jpeg");

//to change all imgs 
$("img").attr("src", "the new img jpeg");

//val() - extract value from input
//retrieve the contents type in the text input
$("input").val();
//update the text input manually
$("input").val("Rusty Stelle");
//update the text input by clearing the content
$("input").val("");

//select the dropdown menu
$("select");
//check to see what the user has chosen in the dropdown menu
$("select").val();


//created classes in html
//add class "correct"
$("h1").addClass("correct");
//remove class "correct"
$("h1").removeClass("correct");
//add class "wrong"
$("li").addClass("wrong");
//
$('li').toggleClass("correct");
//
$('li').first().toggleClass("done");


//click() method - is a quick and easy way to add a click listener to elements