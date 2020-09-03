// Example of an OBJECT. it has an array inside it. 
// Here: add a function as a property inside an Object - method (the function is called a method)
//UNDERSCORE.JS - a library

var obj = {
   name: "Chuck",
   age: 45,
   isCool: false,
   friends: ["bob", "tina"],
   add: function (x, y) {
      return x + y;
   }

}

console.log(obj.add(10, 5));

var dogSpace = {};

dogSpace.speak = function () {
   return "WOOF";
}
console.log(dogSpace.speak());

var catSpace = {};

catSpace.speak = function () {
   return "MEOW";
}
console.log(catSpace.speak());

//"this" Keyword
//making an app that has comments

var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];

//"this" refers to the object 'comments'
comments.print = function () {
   this.data.forEach(function (el) {
      console.log(el);
   });
}

console.log(comments);
console.log(comments.print());
//console.log(print(comments.data));