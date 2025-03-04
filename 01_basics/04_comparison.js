console.log(5 > 10); // false
console.log(5 >= 10); // false
console.log(5 < 10); // true
console.log(5 <= 10); // true
console.log(5 == 10); // false
console.log(5 != 10); // true

console.log("5" > 10); // false
console.log("05" > 10); // false

// In case of null sometimes it converts it to NaN and sometimes to 0.
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true => Comparisons (<, >, <=, >=) work differently as it converts null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false.

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
console.log(undefined < 0); // false

// === (strict check) => checks value as well as datatype
console.log("5" == 5); // true
console.log("5" === 5); // false