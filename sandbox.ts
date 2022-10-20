// explicit types
// If we want to declare a variable as a type, but don't know its contents yet
let character: string;
let age: number;
let isLoggedIn: boolean;

age = "Luigi"; // can't give it a value of a different type
isLoggedIn = true; // can fill the value in of the correct type

// arrays
let ninjas: string[]; // can only be an array of strings
ninjas = [1, 2, 3]; // not allowed
ninjas = ["Red", "Yellow", "Blue"]; // allowed

// sometimes we want to initialize it to be an empty array
let vikings: string[];
vikings.push("Axe throwin!"); // wouldn't be allowed because there's not an array yet

let pirates: string[] = [];
pirates.push("arrrrrgh!"); // in order to use push method

// union types
let mixed: (string | number | boolean)[] = []; // to allow multiple types w/empty array
mixed.push("Hello");
mixed.push(56);
mixed.push(false);
console.log(mixed);
// objects
