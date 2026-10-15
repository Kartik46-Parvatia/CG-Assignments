// Part H]: Type Coercion

// Part a:
// 1. Convert the string "25" into a number using Number() and add 10 to it. Print the result.
let numStr = Number("25") + 10;
console.log(numStr);

// 2. Convert the number 100 into a string using String() and join it with " rupees". Print the result.
let numText = String(100) + " rupees";
console.log(numText);

// 3. Convert the value 0 into a boolean using Boolean() and print it.
console.log(Boolean(0));

// 4. Convert the value "Hello" into a boolean and print it.
console.log(Boolean("Hello"));

// 5. Use the unary + operator to convert "50" into a number and multiply it by 2.
let unaryResult = +"50" * 2;
console.log(unaryResult);


// Part b:
// 1. Predict the output:
console.log("10" - 5); 
console.log("10" + 5); 
console.log("10" * 2); 
console.log("10" / 2);

// 2. Predict the output:
console.log("5" - "2"); 
console.log("5" + "2"); 
console.log("5" * "2"); 
console.log("5" / "2");

// 3. Predict the output:
console.log(Number("123")); 
console.log(Number("123abc")); 
console.log(Number(true)); 
console.log(Number(false)); 
console.log(Number(null)); 
console.log(Number(undefined));

// 4. Predict the output:
console.log(Boolean(0)); 
console.log(Boolean("")); 
console.log(Boolean("0")); 
console.log(Boolean([])); 
console.log(Boolean({})); 
console.log(Boolean(null));

// 5. Predict the output:
console.log(String(100)); 
console.log(String(true)); 
console.log(String(null)); 
console.log(String(undefined)); 
console.log(100 + "");


// Part c:
// 1. Predict the output:
console.log("5" + 3 + 2); 
console.log(5 + 3 + "2"); 
console.log("5" - 3 + 2); 
console.log(5 - "3" + "2");

// 2. Predict the output:
console.log(true + true); 
console.log(true + false); 
console.log(true + "false"); 
console.log(false + "true");

// 3. Predict the output:
console.log(null + 5); 
console.log(undefined + 5); 
console.log(null + "5"); 
console.log(undefined + "5");

// 4. Predict the output:
console.log([] + []); 
console.log([] + {}); 
console.log({} + []); 
console.log({} + {});

// 5. Predict the output:
let cA = "10"; 
let cB = 5; 
let cC = cA + cB; 
let cD = cA - cB; 
let cE = +cA + cB; 
console.log(cC, typeof cC); 
console.log(cD, typeof cD); 
console.log(cE, typeof cE);

// 6. Predict the output:
console.log(!!"Hello"); 
console.log(!!""); 
console.log(!!0); 
console.log(!!1); 
console.log(!!null); 
console.log(!!undefined);

// 7. Predict the output:
console.log(Number("")); 
console.log(Number(" ")); 
console.log(Number("0")); 
console.log(Number("  25  ")); 
console.log(Number("25px"));

// 8. Predict the output:
let val1 = "5"; 
let val2 = 2; 
console.log(val1 + val2); 
console.log(+val1 + val2); 
console.log(val1 - val2); 
console.log(val1 * val2); 
console.log(val1 / val2);


// Bonus Mixed Practice Questions:

// 1. Predict the output:
let counterVal = 5; 
console.log(typeof counterVal++); 
console.log(counterVal); 
console.log(typeof ++counterVal); 
console.log(counterVal);

// 2. Predict the output:
let varX = "10"; 
let varY = ++varX; 
console.log(varX, varY, typeof varX, typeof varY);

// 3. Predict the output:
let varA1 = "5"; 
let varB1 = varA1++; 
console.log(varA1, varB1, typeof varA1, typeof varB1);

// 4. Predict the output:
console.log(typeof (1 + "2")); 
console.log(typeof (1 - "2")); 
console.log(typeof (1 * "2")); 
console.log(typeof (1 / "2"));

// 5. Predict the output:
let nullableVal = null; 
console.log(typeof nullableVal); 
console.log(nullableVal + 1); 
console.log(nullableVal - 1); 
console.log(nullableVal * 1); 
console.log(Boolean(nullableVal));