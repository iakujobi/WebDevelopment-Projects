// printReverse()

function printReverse(arr) {
   for (var i = arr.length - 1; i >= 0; i--){
      console.log(arr[i]);
   }
}

console.log(printReverse([3, 4, 5, 6]));
console.log("**********");

// isUniform()

function isUniform(arr) {
   var first = arr[0];
   for (var i = 1; i < arr.length; i++){
      if (arr[i] !== first) {
         return false;
      }
   }
   return true;
}

console.log(isUniform([1, 1, 1]));
console.log(isUniform([2, 1, 1]));
console.log(isUniform(['he', 'he', 'he']));
console.log("**********");

// sumArray()

function sumArray(arr) {
   var total = 0;
   arr.forEach(function(element) {
      total += element;
   });
   return total;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([-10, 3, 6]));
console.log("**********");

// max()

function max(arr) {
   var max = arr[0];
   for (var i = 1; i < arr.length; i++){
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}

console.log(max([1, 2, 3]));
console.log(max([20, 30, 50, -1100]));


var nums = [14, 24, 56];
nums.forEach(function(numbers) {
   console.log(numbers)
});
console.log("**********");


// myForEach()

function myForEach(arr, func) {
   //loop through the array
   for (var i = 0; i < arr.length; i++){
      //call func for each item in array
      func(arr[i]);
   }
}

var colors = ["yellow", "red", "green"];

// 3 ways to output
myForEach(colors, alert);
(function () {
   console.log("IN A FUNCTION");
})();

myForEach(colors, function (jam) {
   console.log(jam);
});

Array.prototype.myForEach = function (fun) {
   for (var i = 0; i < this.length; i++){
      func(this[i]);
   }
}

var friends = ["sam", "mike", "john"];

friends.myForEach(function (name) {
   console.log("I love " + name);
});

