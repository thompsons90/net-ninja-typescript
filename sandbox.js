// explicit types
// If we want to declare a variable as a type, but don't know its contents yet
var character;
var age;
var isLoggedIn;
age = "Luigi"; // can't give it a value of a different type
isLoggedIn = true; // can fill the value in of the correct type
// arrays
var ninjas; // can only be an array of strings
ninjas = [1, 2, 3]; // not allowed
ninjas = ["Red", "Yellow", "Blue"]; // allowed
// sometimes we want to initialize it to be an empty array
var vikings;
vikings.push("Axe throwin!"); // wouldn't be allowed because there's not an array yet
var pirates = [];
pirates.push("arrrrrgh!"); // in order to use push method
// union types
var mixed = []; // to allow multiple types w/empty array
mixed.push("Hello");
mixed.push(56);
mixed.push(false);
console.log(mixed);
// objects
