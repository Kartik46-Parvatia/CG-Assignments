// // Part F]: Do-While Loop


// // Q1. Print Numbers in Reverse
// // Write a `do-while` loop to print numbers from 10 down to 1.
// // Answer:
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);


// // Q2. Print Even Numbers
// // Write a `do-while` loop to print all even numbers between 1 and 20.
// // Answer:
// let n = 2;
// do {
//   console.log(n);
//   n += 2;
// } while (n <= 20);


// // Q3. Sum of Natural Numbers
// // Write a `do-while` loop to calculate the sum of the first `n` natural numbers.

// // **Example:**
// // Input: 5
// // Output: 15

// // Answer:
// let n = 5;
// let i = 1;
// let sum = 0;
// do {
//   sum += i;
//   i++;
// } while (i <= n);
// console.log(sum);


// // Q4. Product of Digits
// // Write a `do-while` loop to calculate the product of all digits of a given positive integer.

// // **Example:**
// // Input: 234
// // Output: 24

// // Answer:
// let num = 234;
// let temp = num;
// let product = 1;
// do {
//   product *= temp % 10;
//   temp = Math.floor(temp / 10);
// } while (temp > 0);
// console.log(product);


// // Q5. Find the First Digit
// // Write a `do-while` loop to find the leftmost digit of a given positive integer.

// // **Example:**
// // Input: 58372
// // Output: 5

// // Answer:
// let num = 58372;
// let temp = num;
// do {
//   temp = Math.floor(temp / 10);
// } while (temp >= 10);
// console.log(temp);


// // Q6. Calculate a Power
// // Write a `do-while` loop to calculate the power of a number without using `Math.pow()` or the exponentiation operator `**`.

// // **Example:**
// // Input: Base = 3, Exponent = 4
// // Output: 81

// // Answer:
// let base = 3, exp = 4; 
// let result = 1;
// let count = 0;
// do {
//   result *= base;
//   count++;
// } while (count < exp);
// console.log(result); 


// // Q7. Print Multiples with Conditions
// // Write a `do-while` loop to print all numbers between 1 and 100 that are divisible by 4 but not by 8.
// // Answer:
// let i = 1;
// do {
//   if (i % 4 === 0 && i % 8 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100);



// // Q8. Check a Palindrome Number
// // Write a `do-while` loop to check whether a given positive integer is a palindrome without converting it into a string.

// // **Example:**
// // Input: 1221
// // Output: Palindrome number

// // Answer:
// let num = 1221; // input
// let original = num;
// let temp = num;
// let reversed = 0;
// do {
//   reversed = reversed * 10 + temp % 10;
//   temp = Math.floor(temp / 10);
// } while (temp > 0);

// if (reversed === original) {
//   console.log("Palindrome number");
// } else {
//   console.log("Not a palindrome number");
// }



// // Q9. Find the Greatest Common Divisor (GCD)
// // Write a `do-while` loop to find the greatest common divisor of two positive integers.

// // **Example:**
// // Input: 48, 18
// // Output: 6

// // Answer:
// let a = 48, b = 18; 
// do {
//   let temp = b;
//   b = a % b;
//   a = temp;
// } while (b !== 0);
// console.log(a); 


// // Q10. Convert Decimal to Binary
// // Write a `do-while` loop to convert a non-negative decimal integer into binary without using built-in conversion methods.

// // **Example:**
// // Input: 13
// // Output: 1101

// // Answer:
// let n = 13; 
// let binary = "";
// do {
//   binary = (n % 2) + binary; 
//   n = Math.floor(n / 2);
// } while (n > 0);
// console.log(binary);
