//create the secretNumber
let secretNumber = 4;

//ask user for guess
let guess = Number(prompt("Guess a number:"));

//check if guess is right
if (guess === secretNumber) {
   alert("You got it right!");
}
//otherwise, check if higher
else if (guess > secretNumber) {
   alert("TOO High. Guess again!!");
}
//otherwise, check if lower
else {
   alert("TOO Low. Guess again!!");
}