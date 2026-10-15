// Part G]: typeof Operator

// Part a:
// 1. Declare a variable name = "Rahul" and print its type using typeof.
let name = "Rahul";
console.log(typeof name);

// 2. Declare a variable age = 25 and print its type.
let age = 25;
console.log(typeof age);

// 3. Declare a variable isStudent = true and print its type.
let isStudent = true;
console.log(typeof isStudent);

// 4. Declare a variable city (without assigning a value) and print its type.
let city;
console.log(typeof city);

// 5. Print the type of the value null.
console.log(typeof null);


// Part b:
// 1. Predict the output:
console.log(typeof 42); 
console.log(typeof "Hello"); 
console.log(typeof true); 
console.log(typeof undefined);

// 2. Predict the output:
console.log(typeof null); 
console.log(typeof {}); 
console.log(typeof []);

// 3. Predict the output:
console.log(typeof NaN); 
console.log(typeof Infinity); 
console.log(typeof function() {});

// 4. Create three variables: price = 99.99, message = "Welcome", isActive = false. Print the type of each variable with a clear message.
let price = 99.99;
let message = "Welcome";
let isActiveVal = false;
console.log("Type of price: " + typeof price);
console.log("Type of message: " + typeof message);
console.log("Type of isActive: " + typeof isActiveVal);

// 5. Predict the output:
let value = null; 
console.log(typeof value); 
console.log(typeof value === "object");


// Part c:
// 1. Predict the output:
console.log(typeof typeof 100); 
console.log(typeof typeof "Hi"); 
console.log(typeof typeof true);

// 2. Predict the output:
let varA = 10; 
let varB = "10"; 
console.log(typeof varA === typeof varB); 
console.log(typeof varA == typeof varB);

// 3. Predict the output:
console.log(typeof null === "object"); 
console.log(typeof [] === "object"); 
console.log(typeof {} === "object");

// 4. Predict the output:
let variableX; 
console.log(typeof variableX); 
variableX = null; 
console.log(typeof variableX); 
variableX = 0; 
console.log(typeof variableX);

// 5. Predict the output:
console.log(typeof NaN === "number"); 
console.log(typeof Infinity === "number"); 
console.log(typeof (1 / 0));