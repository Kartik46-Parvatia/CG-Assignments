// C]            // **Comparision Operators** //

// 1] Loose Equality ==

// 1) Check whether the string "25" is loosely equal to the number 25.
// console.log("25" == 25) // true //

// 2) Check if 0 == false returns true or false.
// console.log(0 == false) // true //

// 3) Predict the output:
// console.log(10 == "10"); // true //
// console.log(null == undefined);  // true //

// 4) Predict the output:
// console.log("" == 0); // true  //
// console.log([] == false); // true //

// 5) Why does NaN == NaN return false?
// console.log(NaN == NaN) // false //



// 2]                //  **Loose Inequality !=*  //

// 1) Check whether "18" != 18 returns true or false.
// console.log("18" != 18) // false //

// 2) A password is stored as "1234". User enters 1234 (number). Will != return true?
// console.log("1234" != 1234) // false //

// 3) Predict the output:
// console.log(5 != "5"); // false //
// console.log(0 != false); // false //

// 4) Predict the output:
// console.log(null != undefined); // false //
// console.log("" != 0); // false //

// 5) What does NaN != NaN return? Explain.
// console.log(NaN != NaN) // true //






// 3]         // **Strict Equality ===** //

// 1) Check whether "25" === 25 returns true or false. Explain why.
// console.log("25" === 25) // false // beacsue triple = also confirms the datatype while double = just analyze the number don't go upto datatype

// 2) Check if 0 === false and null === undefined.
// console.log(0 === null) // false //
// console.log(null === undefined) // false //

// 3) Predict the output:
// console.log(10 === "10"); // false //
// console.log(true === 1); // false //

// 4) Predict the output:
// console.log("" === 0); // false //
// console.log([] === false); // false //

// 5) Why is === preferred over == in most real-world code?
// === is preferred over == in most real-world code because === checks the datatypes and == only check the value.




// 4]                   // **   Strict Inequality !==** // 

// 1) Check whether "18" !== 18 returns true or false.
// console.log("18" !== 18) // ture //

// 2) Check if 0 !== false and null !== undefined.
// console.log(0 !== false) // true //
// console.log(null !== undefined) // true //

// 3) Predict the output:
// console.log(5 !== "5"); // true //
// console.log(true !== 1); // true //

// 4) Predict the output:
// console.log("" !== 0); // true //
// console.log(NaN !== NaN); // true //

// 5) Write a condition that checks if a variable input is strictly not equal to the string "0".
// console.log(23 !== "0")