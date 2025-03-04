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

// ********** Operations **********

let value = 3;
let negValue = -value;
console.log(negValue); // -3

console.log(2 + 5); // 7
console.log(2 - 5); // -3
console.log(2 * 5); // 10
console.log(2 ** 5); // 32
console.log(2 / 5); // 0.4
console.log(2 % 5); // 2

let str1 = "Mercedes";
let str2 = "Benz";
let str3 = str1 + " " + str2;
console.log(str3); // Mercedes Benz

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 5); // 125
console.log(1 + 2 + "5"); // 35

console.log(3 + 4 * 5 % 3); // 5

console.log(true); // true
console.log(+true); // 1
console.log(+false); // 0
console.log(-true); // -1
console.log(-false); // -0

console.log(+""); // 0
console.log(+"test"); // NaN

let num1, num2, num3;
num1 = num2 = num3 = 100;

let gameCounter = 100;
console.log(gameCounter); // 100
gameCounter++; // postfix increment operator => value is incremented after the usage
console.log(gameCounter); // 101
++gameCounter; // prefix increment operator => value is incremented before the usage
console.log(gameCounter); // 102