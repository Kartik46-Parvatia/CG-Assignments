// 1]                     //    ** Simple Assignment**     //

// 1) Store a student’s name as "Priya" and marks as 92 using the assignment operator.
// let name = "Priya";
// let marks = 92;
// console.log(name) // Priya //
// console.log(marks) // 92 //

// 2) Create a variable score and assign it the value 0.
// let score = 0;
// console.log(score) // 0 //

// 3) Assign the value 50 to three variables a, b and c using a single chained assignment.
// let a = 50;
// let b = 50;
// let c = 50;
// console.log(a) // 50 //
// console.log(b) // 50 //
// console.log(c) // 50 //

// 4) Predict the output:
// let x;
// x = 100;
// console.log(x);  // 100 //

// 5) Predict the output:
// let p = 15;
// let q = p;
// q = 30;
// console.log(p, q);  // 15,30 //

// 4]                 //   **Add and Assign**    // 

// 1) A player’s score is 80. He scores 25 more points. Update the score using +=.
// let score = 80;
// score += 25
// console.log(score)

// 2) A wallet has ₹1500. Cashback of ₹120 is added. Update the balance using +=.
// let walletBalance = 1500;
// walletBalance += 120;
// console.log(walletBalance) // 1700 //

// 3) Predict the output:
// let count = 10;
// count += 5;
// console.log(count);  // 15 //

// 4) Predict the output:
// let msg = "Good";
// msg += " Morning";
// console.log(msg);  // Good Morning //

// 5) What is the final value after let n = 20; n += "5";? Explain.
// let n = 20;
// n += "5";
// console.log(n) // 205 // There is an exception only in the Add and Assign in which it does not add the number in the quotes just print it with the 2nd number.

// 3]                    //    **Subtract and Assign**    //

// 1) Health is 100. Player takes 35 damage. Update health using -=.
// let health = 100;
// health -= 35;
// console.log(health)  // 65 //

// 2) Stock of 300 items is reduced by 45 after a sale. Update using -=.
// let stock = 300;
// stock -= 45;
// console.log(stock) // 255 //

// 3) Predict the output:
// let lives = 5;
// lives -= 2;
// console.log(lives); // 3 //

// 4) Predict the output:
// let num = "40";
// num -= 15;
// console.log(num); // 25

// 5) What is the result of let x = "abc"; x -= 5;? Explain.
// let x = "abc"
// x -= 5;
// console.log(x) // NaN // Here the values can't be subtracted beacuse abc are not numbers and non numbers csn't be subtracted from numbers.


// 4]                     //  **Multiply and Assign**  //

// 1) Price of an item is ₹500. Apply 18% GST using *= 1.18.
// let price = 500;
// price *= 1.18;
// console.log(price) // 590 //

// 2) A quantity of 8 is tripled. Update using *=.
// let quantity = 8;
// quantity *= 3;
// console.log(quantity) // 24 //

 // 3) Predict the output:
// let amount = 200;
// amount *= 1.1;
// console.log(amount); // 220

// 4) Predict the output:
// let val = "7";
// val *= 3;
// console.log(val); // 21

// 5) What is the result of let y = "hello"; y *= 2;? Explain.
// let y = "hello"
// y *= 2;
// console.log(y) // NaN // Because hello is not number and non-number * number is = NaN.




// 5]              //  **Divide And Assign*  //

// 1) Total of 180 chocolates is shared among 6 children. Update using /=.
// let choclates = 180;
// choclates /= 6;
// console.log(choclates) // 30 //

// 2) Distance of 300 km is covered in 5 hours. Find average speed using /=.
// let distance = 300;
// distance /= 5;
// console.log("Average Speed",distance) // 60 //

// 3) Predict the output:
// let total = 400;
// total /= 8;
// console.log(total); // 50 //

// 4) Predict the output:
// let num = "100";
// num /= 4;
// console.log(num); // 25 //

// 5) What is the result of let z = 50; z /= 0;? Explain.
// let z = 50;
// z /= 0;
// console.log(z) // Infinity //




// 6]                       //  **Modulus and  Assign**  //

// 1) Number 47 is divided by 6. Store only the remainder using %=.
// let num = 47;
// num %= 6;
// console.log(num) // 5 //

// 2) Counter is at 23. Keep only the remainder when divided by 12 using %=.
// let counter = 23;
// counter %= 12;
// console.log(counter) // 11 //

// 3) Predict the output:
// let num = 29;
// num %= 5;
// console.log(num); // 4 //

// 4) Predict the output:
// let x = "17";
// x %= 3;
// console.log(x); // 2 //

// 5) What is the result of let m = 15; m %= 0;? Explain.
// let num = 15;
// num %= 0;
// console.log(num) // NaN //





// 7] Exponentiation and Assign **=

// 1) Side of a cube is 5. Update it to get the volume using **= 3.
// let side = 5;
// side **= 3;
// console.log("Volume",side) // 125 //

// 2) Number 4 needs to be squared. Use **= 2.
// let num = 4;
// num **= 2;
// console.log(num) // 16 //

// 3) Predict the output:
// let base = 2;
// base **= 5;
// console.log(base); // 32 //

// 4) Predict the output:
// let n = 4;
// n **= 0.5;
// console.log(n); // 2 //

// 5) What is the result of let p = 2; p **= -1;? Explain.
// let num = 5;
// num **= -1;
// console.log(num) // 0.2 //





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
console.log("" !== 0); // true //
console.log(NaN !== NaN); // true //

// 5) Write a condition that checks if a variable input is strictly not equal to the string "0".
console.log()