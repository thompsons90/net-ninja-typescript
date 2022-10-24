let greet = () => {
  console.log("hello world");
}; // TS will infer this is of type function

// ~ OR ~ we can explicitly define the variable type as a function

let greeting: Function;
