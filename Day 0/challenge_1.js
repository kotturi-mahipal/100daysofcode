const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
/*
a. Take input from the user and save it in a variable
b. Separate the first character from the string and use .toUpperCase()
c. Separate the rest of the string as well
d. Concatenate the first character and the rest of the string using + operator.
*/
let firstChar = name.slice(0, 1)
alert("Hello, ", firstChar.toUpperCase() + name.slice(1, -1));