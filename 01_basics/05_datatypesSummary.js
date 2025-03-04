// kis tareeke se data ko memory mein store kiya jaayega, us basis pe datatypes ke do categorization kiye gaye hai i.e. Primitive and Non-Primitive.

// Primitive or Value type
// Primitive datatypes call by values hote hai matlab ki humein value ki copy milti hai and agar hum kuch operation perform krke value change krte hai toh voh copy value mein change hota hai naaki original value mein.
// 7 types : String, Number, Boolean, null, undefined (variable declared hai, memory space allocated hai but kya value aayegi voh decide nahi hai), Symbol, BigInt

// JavaScript is a dynamically typed language.
const score = 100;
const scoreValue = 67.5;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId); // false

const bigNumber = 234234234234234234n; // bigint

// Non-Primitive or Reference type
// Array, Object, Function
// The datatype of non-primtive is object type.

const heroes = ["Iron Man", "Captain America", "Batman", "Superman", "Spiderman"]; // Array

// Object
let myObj = {
    name: "vineet",
    age: 25
};

// Function
const myFunction = function() {
    console.log("Hello World!");
}
myFunction();

console.log(typeof bigNumber); // bigint
console.log(typeof myFunction); // function => actually it is function object.
console.log(typeof heroes); // object
console.log(typeof id); // symbol