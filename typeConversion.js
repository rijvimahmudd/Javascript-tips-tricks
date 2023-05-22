/** JavaScript Tips & Tricks */

// convert string to number

//using built-in function
let numString = '1000';
console.log(typeof numString); // it will return String

console.log(typeof parseInt(numString)); // return number
console.log(typeof parseInt(numString)); // return number
console.log(typeof Number(numString)); // return number

//conversion without built-in  function
//just remove "0" from numberString
let num = numString - '0';
console.log(typeof num); // return number

//convert number to String
//using built-in function
let numToString = 1000;
console.log(typeof numToString); // return number
console.log(typeof numToString.toString()); // return string
console.log(typeof String(numToString)); // return string

//without built-in function
let numToString2 = numToString + '0';
console.log(typeof numToString2);

/** For more follow my Linkedin */
