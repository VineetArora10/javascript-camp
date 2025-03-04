// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
let score = "paris";

console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

console.log(typeof NaN); // number

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let isLoggedIn = "paris";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 => true
// 0 => false
// "" => false
// "paris" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber, typeof stringNumber); 