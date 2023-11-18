const myStr = 'I am a "double quoted" string inside "double qoutes".';
// console.log(myStr);

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr2);

// random range function
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(2, 50));
