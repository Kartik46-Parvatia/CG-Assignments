/**
 * Assignment: JavaScript Operators Solutions
 * Repository: codinggita/CGXSwarrnim
 * Path: Semester-1/JavaScript/03. JS Operators/Assignment.md
 */

// ==========================================
// A] Arithmetic Operators
// ==========================================

// ------------------------------------------
// 1. Addition +
// ------------------------------------------

// Q1: A school collected ₹15,000 from one class and ₹12,500 from another class. Find the total collection.
let class1Collection = 15000;
let class2Collection = 12500;
let totalCollection = class1Collection + class2Collection;
console.log("Q1 Total Collection:", totalCollection);

// Q2: A person reads 18 pages in the morning and 25 pages in the evening. Find the total pages read.
let morningPages = 18;
let eveningPages = 25;
let totalPages = morningPages + eveningPages;
console.log("Q2 Total Pages Read:", totalPages);

// Q3: A shop sold 125 items on Monday and 178 items on Tuesday. Find the total items sold.
let mondayItems = 125;
let tuesdayItems = 178;
let totalItems = mondayItems + tuesdayItems;
console.log("Q3 Total Items Sold:", totalItems);

// Q4: Predict the output: let a = "10" ; let b = 5 ; let result = a + b ; console.log(result);
let a1 = "10";
let b1 = 5;
let result1 = a1 + b1; 
console.log("Q4 Output:", result1); // Output: "105" (String concatenation because one operand is a string)

// Q5: Predict the output: let x = 5 ; let y = "3" ; let result = x + y ; console.log(result);
let x1 = 5;
let y1 = "3";
let result2 = x1 + y1; 
console.log("Q5 Output:", result2); // Output: "53" (String concatenation)

// Q6: What is the output of 15 + 27 ?
console.log("Q6 Output:", 15 + 27); // Output: 42

// Q7: Calculate the total price if a book costs ₹350 and a pen costs ₹45.
let bookCost = 350;
let penCost = 45;
console.log("Q7 Total Price:", bookCost + penCost); // Output: 395

// Q8: What is the result of "25" + 10 and why?
console.log("Q8 Output:", "25" + 10); 
// Explanation: The result is "2510" because the '+' operator triggers string concatenation when either operand is a string.

// Q9: A person has ₹2000 in their wallet. They buy items worth ₹750 and ₹320. Write an expression using + to find total spent, then calculate remaining balance.
let initialWallet = 2000;
let item1 = 750;
let item2 = 320;
let totalSpent = item1 + item2;
let remainingBalance = initialWallet - totalSpent;
console.log("Q9 Total Spent:", totalSpent, "| Remaining Balance:", remainingBalance);

// Q10: Predict the outputs and explain:
console.log("Q10-1:", 5 + "5" + 5); // Output: "555" (5 + "5" becomes "55", then "55" + 5 becomes "555")
console.log("Q10-2:", 5 + 5 + "5"); // Output: "105" (5 + 5 evaluates to 10 numerically, then 10 + "5" becomes "105")
console.log("Q10-3:", "5" + 5 + 5); // Output: "555" ("5" + 5 becomes "55", then "55" + 5 becomes "555")


// ------------------------------------------
// 2. Subtraction -
// ------------------------------------------

// Q1: A bus has 80 seats, and 53 seats are occupied. Find the number of empty seats.
let totalSeats = 80;
let occupiedSeats = 53;
console.log("Q1 Empty Seats:", totalSeats - occupiedSeats);

// Q2: A student has 500 marks and loses 35 marks due to incorrect answers. Find the final marks.
let initialMarks = 500;
let lostMarks = 35;
console.log("Q2 Final Marks:", initialMarks - lostMarks);

// Q3: A warehouse has 2,500 boxes and sends 875 boxes to a store. Find the remaining boxes.
let initialBoxes = 2500;
let sentBoxes = 875;
console.log("Q3 Remaining Boxes:", initialBoxes - sentBoxes);

// Q4: Predict the output: let a = "10" ; let b = 3 ; let result = a - b ; console.log(result);
let a2 = "10";
let b2 = 3;
console.log("Q4 Output:", a2 - b2); // Output: 7 (The '-' operator attempts type conversion to numbers)

// Q5: Predict the output: let x = "20" ; let y = "5" ; let result = x - y ; console.log(result);
let x2 = "20";
let y2 = "5";
console.log("Q5 Output:", x2 - y2); // Output: 15 (Both strings converted to numbers)

// Q6: What is the output of 100 - 37 ?
console.log("Q6 Output:", 100 - 37); // Output: 63

// Q7: A tank has 500 litres of water. After using 175 litres, how much water is left?
let initialWater = 500;
let usedWater = 175;
console.log("Q7 Water Left:", initialWater - usedWater);

// Q8: What is the result of "50" - 20 and "50" - "20" ? Explain any difference.
console.log("Q8-1:", "50" - 20); // Output: 30
console.log("Q8-2:", "50" - "20"); // Output: 30
// Explanation: Unlike '+', the '-' operator performs mathematical subtraction, automatically converting string operands into numbers in both cases.

// Q9: A shopkeeper had 240 apples. He sold 95 in the morning and 67 in the evening. Write expressions to find how many apples are left.
let totalApples = 240;
let soldMorning = 95;
let soldEvening = 67;
let applesLeft = totalApples - (soldMorning + soldEvening);
console.log("Q9 Apples Left:", applesLeft);

// Q10: Predict and explain the outputs:
console.log("Q10-1:", "100" - 50);       // Output: 50 ("100" converted to number 100)
console.log("Q10-2:", "abc" - 10);       // Output: NaN ("abc" cannot be converted to a valid number)
console.log("Q10-3:", 10 - "5" - "2");   // Output: 3 (Evaluates left to right: 10 - 5 = 5, then 5 - 2 = 3)
console.log("Q10-4:", "10" - "5" - "2"); // Output: 3 (Strings converted to numbers sequentially)


// ------------------------------------------
// 3. Multiplication *
// ------------------------------------------

// Q1: One notebook costs ₹45. Calculate the cost of buying 8 notebooks.
let notebookCost = 45;
let quantityNotebooks = 8;
console.log("Q1 Total Cost:", notebookCost * quantityNotebooks);

// Q2: A machine produces 120 bottles per hour. Calculate its production in 6 hours.
let ratePerHour = 120;
let hours = 6;
console.log("Q2 Total Production:", ratePerHour * hours);

// Q3: A garden has 7 rows with 15 plants in each row. Find the total number of plants.
let rows = 7;
let plantsPerRow = 15;
console.log("Q3 Total Plants:", rows * plantsPerRow);

// Q4: Predict the output: let a = "5" ; let b = 4 ; let result = a * b ; console.log(result);
let a3 = "5";
let b3 = 4;
console.log("Q4 Output:", a3 * b3); // Output: 20 (String "5" converted to number 5)

// Q5: Predict the output: let x = "10" ; let y = "2" ; let result = x * y ; console.log(result);
let x3 = "10";
let y3 = "2";
console.log("Q5 Output:", x3 * y3); // Output: 20 (Both strings converted to numbers)

// Q6: What is the output of 12 * 8 ?
console.log("Q6 Output:", 12 * 8); // Output: 96

// Q7: One pizza costs ₹299. What is the total cost of 4 pizzas?
let pizzaCost = 299;
let pizzaCount = 4;
console.log("Q7 Total Cost:", pizzaCost * pizzaCount); // Output: 1196

// Q8: What is the result of "7" * 6 and "7" * "6" ?
console.log("Q8-1:", "7" * 6);   // Output: 42
console.log("Q8-2:", "7" * "6"); // Output: 42

// Q9: A factory produces 45 units per hour. How many units does it produce in 8 hours? Write the expression and calculate.
let unitRate = 45;
let totalHours = 8;
console.log("Q9 Total Units:", unitRate * totalHours);

// Q10: Predict and explain the outputs:
console.log("Q10-1:", "5" * 3 * "2");     // Output: 30 ("5"*3 = 15, 15*"2" = 30)
console.log("Q10-2:", "abc" * 4);         // Output: NaN ("abc" cannot be parsed as a number)
console.log("Q10-3:", 10 * "2.5");        // Output: 25 (Converted to floating-point number)
console.log("Q10-4:", "10" * "2.5" * "0");// Output: 0 (Any finite number multiplied by 0 is 0)


// ------------------------------------------
// 4. Division /
// ------------------------------------------

// Q1: A teacher distributes 144 pencils equally among 12 students. Find the number of pencils each student receives.
let totalPencils = 144;
let studentsCount = 12;
console.log("Q1 Pencils per Student:", totalPencils / studentsCount);

// Q2: A train travels 360 kilometres in 6 hours. Find its average distance travelled per hour.
let distance = 360;
let timeHours = 6;
console.log("Q2 Average Speed:", distance / timeHours);

// Q3: A company distributes ₹72,000 equally among 9 departments. Find the amount received by each department.
let totalAmount = 72000;
let departments = 9;
console.log("Q3 Amount per Department:", totalAmount / departments);

// Q4: Predict the output: let a = "20" ; let b = 4 ; let result = a / b ; console.log(result);
let a4 = "20";
let b4 = 4;
console.log("Q4 Output:", a4 / b4); // Output: 5

// Q5: Predict the output: let x = "100" ; let y = "5" ; let result = x / y ; console.log(result);
let x4 = "100";
let y4 = "5";
console.log("Q5 Output:", x4 / y4); // Output: 20

// Q6: What is the output of 144 / 12 ?
console.log("Q6 Output:", 144 / 12); // Output: 12

// Q7: 360 students are to be divided equally into 9 classrooms. How many students per classroom?
console.log("Q7 Students per Classroom:", 360 / 9); // Output: 40

// Q8: What is the result of "100" / 4 and "100" / "4" ?
console.log("Q8-1:", "100" / 4);   // Output: 25
console.log("Q8-2:", "100" / "4"); // Output: 25

// Q9: A total bill of ₹2400 is to be shared equally among 6 friends. Write the expression and find each person’s share.
let totalBill = 2400;
let friendsCount = 6;
console.log("Q9 Share per Friend:", totalBill / friendsCount);

// Q10: Predict and explain the outputs:
console.log("Q10-1:", 10 / 0);       // Output: Infinity
console.log("Q10-2:", -10 / 0);      // Output: -Infinity
console.log("Q10-3:", 0 / 0);        // Output: NaN (Not a Number)
console.log("Q10-4:", "20" / "4" / 2); // Output: 2.5 ("20"/"4" = 5, 5/2 = 2.5)
console.log("Q10-5:", "abc" / 5);    // Output: NaN


// ------------------------------------------
// 5. Modulus %
// ------------------------------------------

// Q1: A teacher has 53 students and forms groups of 5. Find the number of students left over.
console.log("Q1 Students Left Over:", 53 % 5); // Output: 3

// Q2: A shop has 128 candies and packs 10 candies in each box. Find the number of candies left unpacked.
console.log("Q2 Unpacked Candies:", 128 % 10); // Output: 8

// Q3: A factory produces 237 toys and packs them in boxes of 6. Find how many toys are left after packing full boxes.
console.log("Q3 Toys Left:", 237 % 6); // Output: 3

// Q4: A bus can carry 40 passengers. If 185 people are waiting, find how many people will be left after filling as many full buses as possible.
console.log("Q4 People Left:", 185 % 40); // Output: 25

// Q5: Predict the output: let a = 10 ; let b = 0 ; let result = a % b ; console.log(result);
let a5 = 10, b5 = 0;
console.log("Q5 Output:", a5 % b5); // Output: NaN

// Q6: What is the output of 29 % 5 ?
console.log("Q6 Output:", 29 % 5); // Output: 4

// Q7: There are 23 chocolates to be packed in boxes of 4. How many chocolates will be left over?
console.log("Q7 Chocolates Left Over:", 23 % 4); // Output: 3

// Q8: What is the result of 0 % 7 and 15 % 0 ? Explain.
console.log("Q8-1:", 0 % 7);  // Output: 0 (Zero divided by any non-zero number has a remainder of 0)
console.log("Q8-2:", 15 % 0); // Output: NaN (Modulo by zero is undefined)

// Q9: A number of pages (47) needs to be printed on sheets that hold 6 pages each. How many full sheets are needed and how many pages will be left over?
let totalPagesCount = 47;
let pagesPerSheet = 6;
let fullSheets = Math.floor(totalPagesCount / pagesPerSheet);
let leftOverPages = totalPagesCount % pagesPerSheet;
console.log("Q9 Full Sheets Needed:", fullSheets, "| Pages Left Over:", leftOverPages);

// Q10: Predict and explain the outputs (especially the signs):
console.log("Q10-1:", 17 % 5);   // Output: 2
console.log("Q10-2:", -17 % 5);  // Output: -2 (Sign of the result follows the sign of the first operand)
console.log("Q10-3:", 17 % -5);  // Output: 2
console.log("Q10-4:", -17 % -5); // Output: -2
console.log("Q10-5:", 10 % 0);   // Output: NaN


// ------------------------------------------
// 6. Exponentiation **
// ------------------------------------------

// Q1: Find the volume of a cube with a side length of 6 cm using side ** 3 .
let side1 = 6;
console.log("Q1 Cube Volume:", side1 ** 3); // Output: 216

// Q2: Calculate the total number of cells in a square arrangement with 9 cells on each side using side ** 2 .
let side2 = 9;
console.log("Q2 Total Cells:", side2 ** 2); // Output: 81

// Q3: Find the value of ( 5^4 ) using the exponentiation operator.
console.log("Q3 Value of 5^4:", 5 ** 4); // Output: 625

// Q4: A digital image has 1,024 pixels on each side (square image). Find the total number of pixels using pixels ** 2 .
let pixels = 1024;
console.log("Q4 Total Pixels:", pixels ** 2); // Output: 1048576

// Q5: Predict the output: let base = 2 ; let power = - 1 ; let result = base ** power ; console.log(result);
let base = 2;
let power = -1;
console.log("Q5 Output:", base ** power); // Output: 0.5 (Equivalent to 2^-1 = 1/2)

// Q6: What is the output of 3 ** 4 ?
console.log("Q6 Output:", 3 ** 4); // Output: 81

// Q7: Calculate the area of a square whose side is 9 units using the exponentiation operator.
let squareSide = 9;
console.log("Q7 Square Area:", squareSide ** 2); // Output: 81

// Q8: What is the result of 2 ** 5 and 5 ** 2 ? Are they the same?
console.log("Q8-1 (2 ** 5):", 2 ** 5); // Output: 32
console.log("Q8-2 (5 ** 2):", 5 ** 2); // Output: 25
console.log("Are they the same?:", 2 ** 5 === 5 ** 2); // Output: false

// Q9: Predict and explain the outputs:
console.log("Q9-1:", 2 ** 3 ** 2);       // Output: 512 (Evaluated right-to-left: 3**2 = 9, then 2**9 = 512)
console.log("Q9-2:", (2 ** 3) ** 2);     // Output: 64 (Parentheses override right-association: 8**2 = 64)
console.log("Q9-3:", 2 ** -3);           // Output: 0.125 (1 / (2**3))
// console.log(-2 ** 2);                 // SyntaxError: Unary operator cannot precede exponentiation without parentheses
console.log("Q9-4:", (-2) ** 2);         // Output: 4
console.log("Q9-5:", 4 ** 0.5);          // Output: 2 (Square root of 4)

// Q10: Predict the output: let a = 10 ; let b = 0 ; let result = a ** b ; console.log(result);
let a6 = 10;
let b6 = 0;
console.log("Q10 Output:", a6 ** b6); // Output: 1 (Any non-zero number raised to the power of 0 is 1)