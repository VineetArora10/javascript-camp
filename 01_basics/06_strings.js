const name = "vineet";
const repoCount = 50;

// String Concatenation
console.log("Hi, I'm " + name + " and I am having " + repoCount + " repositories on github.");

// String Interpolation
console.log(`Hi, I'm ${name} and I am having ${repoCount} repositories on github.`);

// String declaration using new keyword
const gameName = new String("Grand Theft Auto V");
console.log(gameName);

console.log(gameName.length); // 18
console.log(gameName[0]); // G
console.log(gameName.__proto__); // {}
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(10)); // t
console.log(gameName.indexOf('t')); // 10

const flightPath = "Dubai_to_London";
const sourceCity = flightPath.substring(0, 5); // here 0 is inclusive and 5 is exclusive
console.log(sourceCity);

const source = flightPath.slice(0, 5);
console.log(source);

const destination = flightPath.slice(-10, -3); // In slice we can give negative values whereas in case of substring we cannot.
console.log(destination); // _to_Lon

console.log(flightPath.slice(-6, )); // London

const franceCapital = "    Paris     ";
console.log(franceCapital);
console.log(franceCapital.trim());
console.log(franceCapital.trimStart());
console.log(franceCapital.trimEnd());

const url = "https://github.com/vineet%20arora";
console.log(url.replace("%20", "-"));

console.log(url.includes("github")); // true
console.log(url.includes("gmail")); // false

const dealershipLocations = "Gurugram-Noida-Delhi-Chandigarh-Lucknow-Dehradun";
console.log(dealershipLocations.split("-"));