// // E] While Loop


// // Q1. Print Numbers
// // Write a `while` loop to print numbers from 1 to 10.
// // Answer:
// let i = 1;
// while (i<=10){
//     console.log(i)
//     i++
// }


// // Q2. Sum of Natural Numbers
// // Write a `while` loop to calculate the sum of the first 10 natural numbers.
// // Answer:
// let i = 1;
// let sum = 0
// while (i<=10){
//     sum+=i
//     i++
// }
// console.log(sum)


// // Q3. Multiplication Table
// // Write a `while` loop to print the multiplication table of a given number from 1 to 10.

// // **Example:**
// // Input: 5
// // Output:
// // 5 x 1 = 5
// // 5 x 2 = 10
// // ...
// // 5 x 10 = 50

// // Answer:
// let i = 1;
// const num = 5
// while (i<=10){
//     console.log(num,"x",i,"=",num*i)
//     i++
// }


// // Q4. Count the Digits
// // Write a `while` loop to count the total number of digits in a given positive integer.

// // **Example:**
// // Input: 58372
// // Output: 5

// // Answer:
// let num = 58321
// let count = 0
// while (num>0){
//     count+=1
//     num=Math.floor(num/10)
// }
// console.log(count)


// // Q5. Reverse a Number
// // Write a `while` loop to reverse the digits of a given positive integer.

// // **Example:**
// // Input: 12345
// // Output: 54321

// // Answer:
// let num = 58321
// let reverse = 0
// while (num>0){
//     digit=num%10
//     reverse=reverse*10+digit
//     num=Math.floor(num/10)
// }
// console.log(reverse)


// // Q6. Sum of Digits
// // Write a `while` loop to calculate the sum of all digits of a given number.

// // **Example:**
// // Input: 4729
// // Output: 22

// // Answer:
// let num = 58321
// let sum = 0
// while (num>0){
//     digit=num%10
//     sum+=digit
//     num=Math.floor(num/10)
// }
// console.log(sum)


// // Q7. Print Numbers with Conditions
// // Write a `while` loop to print all numbers between 1 and 100 that are divisible by both 3 and 5 but not by 7.
// // Answer:
// let i = 1;
// while (i<=100){
//     if (i%3==0 && i%5==0 && i%7!=0){
//         console.log(i)
//     }
//     i++
// }


// // Q8. Calculate Factorial
// // Write a `while` loop to calculate the factorial of a given non-negative integer.

// // **Example:**
// // Input: 5
// // Output: 120

// // Answer:
// let fact = 1
// let i = 1
// let num = 6
// while (i<=num){
//     fact*=i
//     i++
// }
// console.log("Factorial:",fact)


// // Q9. Check a Palindrome Number
// // Write a `while` loop to check whether a given number is a palindrome without converting it into a string.

// // **Example:**
// // Input: 121
// // Output: Palindrome number

// // Answer:
// let num = 12321
// let original = num
// let i = 1
// let reverse = 0
// while (i<=num){
//     let digit = num%10
//     reverse = reverse*10+digit
//     num = Math.floor(num/10)
// }
// if (reverse===original){
//     console.log("A Palindrome number")
// }else{
//     console.log("Not a Palindrome")
// }


// // Q10. Convert Decimal to Binary
// // Write a `while` loop to convert a positive decimal integer into its binary representation without using built-in methods such as `toString(2)`.

// // **Example:**
// // Input: 13
// // Output: 1101

// // Answer:
// let num = 154
// let binary = ""
// let i = 1
// while (i<=num){
//     digit = num%2
//     binary=digit+binary
//     num = Math.floor(num/2)
// }
// console.log(binary)
