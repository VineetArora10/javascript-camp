console.log("JavaScript is fun!");

const accountId = 144553;
let accountEmail = "vineet@gmail.com";
var accountPassword = "1234";
accountCity = "New Delhi";
let accountState;

// const values cannot be changed.
// accountId = 453234; // TypeError: Assignment to constant variable.
console.log(accountId);

accountEmail = "vineet@yahoo.com";
accountPassword = "56789";
accountCity = "Mumbai";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
    Prefer not to use var,
    because of issue in block scope and functional scope.
*/