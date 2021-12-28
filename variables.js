//This file shows how to declare variables in JavaScript.
//Variables are containers that store values.

//Declare Javascript variables with var, let, or const.

//General Rules of Thumb:
// 1. Use var if you are working on legacy code or need to redeclare a variable.
// 2. Use const as much as possible, unless you need to redeclare or hoist a variable. 
// 3. Use let if you are working with loops. 

//Here’s an example of a variable being declared in camel case:
  var myName = "Beyonce Knowles";
  let myName = "Jimmy Neutron";
  const myName = "Polly Pocket";

//Reassigning variables: You can give an existing variable a new value at any point after it’s declared.
  var weather = "rainy";
  weather = "sunny";
//Output
  "sunny";
 
//PRIMITIVE DATA TYPES: can hold only one value at a time
  // 1. String: can use single or double quotes
        const a = "Hello World"

  // 2. Number
        const a = 25; // integer
        const b = 80.5;  // floating-point number

  // 3. Boolean - True or False
        const isSleeping = true;
        const isSleeping = false;

//COMPOSITE DATA TYPES: can hold collections of values.
  // 1. Object: a complex data type that allows you to store collections of data.
        const myCar = {
              model: "BMW X3",
              color: "white",
              doors: 4  
        }

  // 2. Array: a type of object used for storing multiple values. Each value in an array has an index.
        const colors = ["Red", "Yellow", "Green", "Orange"];
        const cities = ["London", "Paris", "New York"];

        alert(colors[0]);   // Output: Red
        alert(cities[2]);   // Output: New York
        // The array index starts from 0

 //  3. Function: a callable object that executes a block of code.
        const greeting = function () {
              return "Hello World!";
          }
// Check the type of greeting variable
       alert(typeof greeting) // Output: function
       alert(greeting());  // Output: Hello World! 
 