// ParseInt converts a string into an integer. The second parameter - radix, specifies the integer type: binary, decimal, hexadecimal, octa.
const binaryToInt = (str) => {
  return parseInt(str, 16);
};

console.log(binaryToInt("100"));
