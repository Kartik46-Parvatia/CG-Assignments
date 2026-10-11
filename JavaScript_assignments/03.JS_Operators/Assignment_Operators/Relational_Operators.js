// 5] Greater Than ( > )

// 1) A student’s marks are 78. The passing marks are 40. Check whether the student has scored more than the passing marks.
// let studentMarks = 78;
// let passingMarks = 40;
// console.log(studentMarks > passingMarks)

// 2) Temperature today is 35°C and yesterday it was 28°C. Check if today is hotter.
// let todayTemp = 35;
// let yesterdayTemp = 28;
// if (todayTemp > yesterdayTemp) {
//     console.log("Today is hotter than yesterday.");
// } else {
//     console.log("Today is not hotter than yesterday.");
// }

// 3) Predict the output:
// console.log(15 > 10); // true //
// console.log(10 > 15); // false //
// console.log(10 > 10); // false //

// 4) Predict the output:
// console.log("20" > 15); // true //
// console.log("5" > "10"); // false //
// console.log("abc" > 10); // false //

// 5) What is the result of null > 0 and undefined > 0? Explain.
console.log(null > 0) // false //
console.log(undefined > 0) // false //

// 6) A shop has 120 items in stock. A customer wants to buy 85 items. Write a condition using > to check if stock is sufficient.
let stock = 120;
let requested = 85;
let isSufficient = stock > requested;
console.log(isSufficient)

// 7) Predict and explain:
console.log(true > false); // true //
console.log("10" > "2"); // false //
console.log(NaN > 5); // false //


// 6] Less Than ( < )

// 1) A box can hold maximum 50 kg. Current weight is 42 kg. Check if more items can still be added.
let maxWeight = 50;
let currentWeight = 42;
console.log(currentWeight < maxWeight); // true //

// 2) Age of a person is 16. Minimum age required is 18. Check if the person is underage.
let age = 16;
let minAge = 18;
console.log(age < minAge); // true //

// 3) Predict the output:
console.log(8 < 12); // true //
console.log(20 < 10); // false //
console.log(7 < 7); // false //

// 4) Predict the output:
console.log("8" < 10); // true //
console.log("20" < "3"); // true //
console.log("hello" < 5); // false //

// 5) What is the result of null < 0 and undefined < 0? Explain.
console.log(null < 0) // false //
console.log(undefined < 0) // false //

// 6) A tank capacity is 500 litres. Current water level is 375 litres. Write a condition using < to check if it is not full.
let capacity = 500;
let waterLevel = 375;
let isNotFull = waterLevel < capacity;
console.log(isNotFull)

// 7) Predict and explain:
console.log(false < true); // true //
console.log("5" < "15"); // true //
console.log(NaN < 10); // false //

// 7] Greater Than or Equal To ( >= )


// 1) Minimum marks required for distinction is 75. A student scored 75. Check if the student gets distinction.
let required = 75;
let studentScore = 75;
console.log(studentScore >= required); // true //

// 2) Ticket price is ₹300. A person has ₹300. Check if they can buy the ticket.
let ticketPrice = 300;
let moneyHave = 300;
console.log(moneyHave >= ticketPrice); // true //

// 3) Predict the output:
console.log(25 >= 25); // true //
console.log(30 >= 25); // true //
console.log(20 >= 25); // true //

// 4) Predict the output:
console.log("25" >= 25); // true //
console.log("10" >= "2"); // true //
console.log(null >= 0); // true //

// 5) What is the result of undefined >= 0? Explain.
// false // undefined converts to NaN, and any comparison with NaN returns false. //

// 6) A lift can carry maximum 8 people. Currently 8 people are inside. Write a condition using >= to check if the lift is full or overloaded.
let maxLimit = 8;
let currentPeople = 8;
let isFullOrOverloaded = currentPeople >= maxLimit;
console.log(isFullOrOverloaded)

// 7) Predict and explain:
console.log(true >= 1); // true //
console.log("" >= 0); // false //
console.log(NaN >= NaN); // false //




// 8] Less Than or Equal To ( <= )

// 1) Maximum speed limit is 60 km/h. A vehicle is travelling at 60 km/h. Check if it is within the limit.
let speedLimit = 60;
let carSpeed = 60;
console.log(carSpeed <= speedLimit); // true //

// 2) A student needs at least 40 marks to pass. He scored 39. Check if he has failed.
let passMark = 40;
let score = 39;
console.log(score <= passMark);

// 3) Predict the output:
console.log(15 <= 20); // true //
console.log(20 <= 15); // false //
console.log(15 <= 15); // true //

// 4) Predict the output:
console.log("15" <= 20); // true //
console.log("30" <= "5"); // false //
console.log(null <= 0); // true //

// 5) What is the result of undefined <= 0? Explain.
// false // undefined becomes NaN, making the comparison false. //

// 6) A bag can hold maximum 10 books. Currently it has 10 books. Write a condition using <= to check if more books can be added.
let maxBooks = 10;
let currentBooks = 10;
let canAddMore = currentBooks <= maxBooks;
console.log(canAddMore)

// 7) Predict and explain:
console.log(false <= 0); // true //
console.log("" <= 0); // true //
console.log(NaN <= 5); // false //


// 9] Mixed Practice ( >, <, <=, >= )


// 1) Write expressions to check:
// Whether age 18 is greater than or equal to voting age 18.
// console.log(age >= 18)

// Whether temperature 32 is less than 35.
// console.log(temperature < 35)

// Whether score 90 is greater than 85.
// console.log(score > 85)


// 2) Predict the outputs:
console.log(10 > 5 && 5 < 10); // true //
console.log("10" >= 10); // true //
console.log(null <= undefined); // false //
console.log("5" < "10" && 5 > 2); // false //


// 3) A product costs ₹499. A customer has ₹500. Write conditions using >= and < to decide if the customer can buy it and if any change will be left.
let price = 499;
let cash = 500;
let canBuy = cash >= price;
let changeLeft = cash - price;
console.log("Can Buy? ", canBuy)
console.log("Change Left", changeLeft)


// 4) Explain why "10" > "2" is false but 10 > 2 is true.
// 10 > 2: Both are numbers, so JavaScript performs a direct mathematical comparison where $10$ is greater than $2$. //

// "10" > "2": Both are strings. When comparing two strings, JavaScript compares them lexicographically (alphabetically character-by-character) based on their Unicode values. It compares the first character '1' with '2'. Since the character code for '1' comes before '2', JavaScript evaluates "10" as less than "2", making "10" > "2" result in false. //