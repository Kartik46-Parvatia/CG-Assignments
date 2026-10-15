// 1]                                      **LOGICAL AND &&**

// 1) Stored username is "admin" and password is 1234. Check if both are valid using && and print the result.
let userName = "Admin";
let password = 1234;
let isValid = userName == "Admin" && password == 1234;
console.log(isValid)


// 2) A user is logged in (isLoggedIn = true) and has permission (hasPermission = true). Check if they can access a page using &&.
let isLoggedIn = true;
let hasPermission = true;
let canAccess = isLoggedIn && hasPermission;
console.log(canAccess)


// 3) A product is in stock (inStock = true) and its price is less than ₹1000 (price = 800). Check if it can be bought using &&.
let inStock = true;
let price = 800;
console.log(inStock == true && price >= 1000)
if (inStock == true && price >= 1000){
    console.log("Yes Product Can Be Bought")
}else{
    console.log("No Product Can't Be Bought")
}


// 4) A student has marks 75 and attendance 80. Passing requires marks greater than 65 and attendance greater than 70. Check using &&.
let marks = 75;
let attendance = 80;
let forPassing = marks > 65 && attendance > 70;
console.log(forPassing)
if (marks > 65 && attendance > 70){
    console.log("Passed")
}else{
    console.log("Failed")
}


// 5) Two conditions: isWeekend = true and isHoliday = false. A party happens only if both are true. Check using &&.
let isWeekend = true;
let isHoliday = false;
let partyHappens = isWeekend && isHoliday;
console.log(partyHappens)
if (isWeekend == true && isHoliday == true){
    console.log("Party Will Happen")
}else{
    console.log("Party Will Not Happen")
}


// 6) Predict the output:
// let a = 0;
// let b = 10;
// let result = a && b;
// console.log(result); // 0 //


// 7) Predict the output:
// let x = 5;
// let y = 10;
// let result = (x > 3 && y) || 0;
// console.log(result); // 10 //


// 8) Predict the output:
// let p = "Hello";
// let q = "";
// let r = "World";
// let result = p && q && r;
// console.log(result); // "" //


// 9) Predict the output:
// let val = 5;
// let condition = val && (val = 0);
// console.log(condition); // 0 //
// console.log(val); // 0 //


// 10) Predict the output:
// let x = 10;
// let y = 20;
// let result = (x && y) && (x > y);
// console.log(result); // false //




// 1]                                      **LOGICAL OR ||**

// 1) A user can login with either a correct password (passwordCorrect = true) or a valid OTP (otpValid = false). Check if login is allowed using ||.
let passwordCorrect = true;
let otpValid = false;
let loginSuccessful = passwordCorrect || otpValid;
console.log(loginSuccessful)


// 2) A discount applies if the user is a member (isMember = false) or has a coupon (hasCoupon = true). Check using ||.
let isMember = false;
let hasCoupon = true;
let discountValid = isMember || hasCoupon;
console.log(discountValid)


// 3) Entry is allowed if age is above 18 (age = 16) or height is above 150 cm (height = 155). Check using ||.
let age = 16;
let height = 150;
let isAllowed = age >= 18 || height > 150;
console.log(isAllowed)


// 4) A form is valid if either email is given (emailGiven = true) or phone is given (phoneGiven = false). Check using ||.
let emailGiven = true;
let phoneGiven = false;
let isFormValid = emailGiven || phoneGiven;
console.log(isFormValid)


// 5) A game level opens if score is above 1000 (score = 900) or time bonus is collected (timeBonus = true). Check using ||.
let score = 900;
let timeBonus = true;
let gameLevelOpens = score > 1000 || timeBonus;
console.log(gameLevelOpens)


// 6) Predict the output:
// let a = 0;
// let b = false;
// let c = "";
// let d = null;
// let e = 42;
// let result = a || b || c || d || e;
// console.log(result);  // 42 //


// 7) Predict the output:
// let x = "Hello" || 0;
// let y = 0 || "Hi";
// console.log(x, y); // Hello Hi //


// 8) Predict the output:
let a = 10;
let b = 20;
let result = (a < 5) || (b > 15);
console.log(result); // true //


// 9) Predict the output:
let val = 5;
let condition = val || (val = 0);
console.log(condition); // 5 //
console.log(val); // 5 // 


// 10) Predict the output:
let x = "" || 0 || false || null || undefined || "OK";
console.log(x); // OK //




// // 3. Logical NOT !

// // Write a JavaScript program for each:
// // 1. A user is not banned (isBanned = false). Check if they can login by negating isBanned using !.
// let isBanned = false;
// let canLogin = !isBanned;
// console.log(canLogin);

// // 2. A task is not completed (isCompleted = false). Check if it is still pending using !.
// let isCompleted = false;
// let isPending = !isCompleted;
// console.log(isPending);

// // 3. A light is on (isOn = true). Check if it is off using !.
// let isOn = true;
// let isOff = !isOn;
// console.log(isOff);

// // 4. A subscription is not active (isActive = false). Check if the user cannot access premium content using !.
// let isActive = false;
// let cannotAccess = !isActive;
// console.log(cannotAccess);

// // 5. A file is not read-only (isReadOnly = false). Check if it can be edited using !.
// let isReadOnly = false;
// let canBeEdited = !isReadOnly;
// console.log(canBeEdited);


// // Additional Questions (Logical NOT !)

// // 1. Predict the output:
// let a = 0; 
// let b = 1; 
// console.log(!a, !b);

// // 2. Predict the output:
// let x = "Hello"; 
// let y = ""; 
// console.log(!x, !y);

// // 3. Predict the output:
// let val = 5; 
// let result = !val; 
// console.log(result);

// // 4. Predict the output:
// let aVal = 10; 
// let bVal = 20; 
// let result4 = !(aVal && bVal); 
// console.log(result4);

// // 5. Predict the output:
// let xVal = 0; 
// let yVal = 1; 
// let result5 = !(xVal || yVal); 
// console.log(result5);