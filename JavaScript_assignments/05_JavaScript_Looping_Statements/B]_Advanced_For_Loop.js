// // Part B] For Loop (Additional advanced questions)


// // 1. Given an array of temperatures `[28, 32, 25, 40, 18, 35]`, use a `for` loop to count how many days were hotter than 30°C.
// // Answer:
// let dayWiseTemp = [28, 32, 25, 40, 18, 35]
// let count = 0;
// for (let i=0; i<dayWiseTemp.length; i++){
//     if (dayWiseTemp[i]>=30){
//         count+=1
//     }
// }
// console.log("Days Hotter than 30°C:",count)


// // 2. Write a `for` loop that calculates the sum of all digits of a given number (example: 4729 → 4+7+2+9 = 22).
// // Answer:
// let num = 4729;
// let sum = 0;
// for (let i=0; i<=num; i++){
//     let digit = num%10
//     sum+=digit
//     num = Math.floor(num/10)
// }
// console.log("Sum of Digits:",sum)


// // 3. Create a `for` loop that prints only the numbers between 1 and 100 that are divisible by both 3 and 5, but not by 7.  
// // Answer:
// for (let i=1; i<=100; i++){
//     if (i%3==0 && i%5==0 && i%7!=0){
//         console.log(i)
//     }
// }


// // 4. Given the string `"JavaScript"`, use a `for` loop to create a new string that contains only the consonants (remove vowels).  
// // Answer:
// let lang = "JavaScript";
// for (let i=0; i<lang.length; i++){
//     if (lang[i]!="a"&&lang[i]!="e"&&lang[i]!="i"&&lang[i]!="o"&&lang[i]!="u"){
//         console.log(lang[i])
//     }
// }


// // 5. Write a `for` loop that finds the largest number in an array of positive integers without using any sorting method.  
// // Answer:
// let arr = [23, 55, 21, 66, 42, 63]
// let maxNum = 0
// for (let i=0; i<arr.length; i++){
//     if (arr[i]>maxNum){
//         maxNum = arr[i]
//     }
// }
// console.log(maxNum)


// // 6. Use a `for` loop to check whether a given number is a perfect number (a number equal to the sum of its proper divisors). Example: 28.  
// // Answer:
// let num = 28;
// let sum = 0;
// for (let i=1; i<28; i++){
//     if (num%i==0){
//         sum+=i
//     }
// }
// if (sum==num){
//     console.log("Perfect Number")
// }


// // 7. Print the following series using a single `for` loop:  
// //    `1 2 4 8 16 32 64 128` 
// // Answer:
// let num = 1
// let bag = ""
// for (let i=1; i<=8; i++){
//     bag+=num+" "
//     num*=2
// }
// console.log(bag)


// // 8. Write a `for` loop that prints the first 20 Fibonacci numbers (starting with 0 and 1).
// // Answer:
// let a = 0;
// let b = 1;
// for (let i=1; i<=20; i++){
//     console.log(a)
//     next = a+b
//     a=b
//     b=next
// }


// // 9. Given an array of student scores `[45, 78, 90, 32, 56, 88]`, use a `for` loop to calculate the average and also count how many students scored above the average.  
// // Answer:
// let arr = [45, 78, 90, 32, 56, 88];
// let sum = 0;
// for (let i=1; i<arr.length; i++){
//     sum+=arr[i]
// }
// let avg = sum/arr.length
// console.log("Average:",avg)
// let count=0
// for (let i=1; i<arr.length; i++){
//     if (arr[i]>=avg){
//         count+=1
//     }
// }
// console.log(count)


// // 10. Write a `for` loop that converts a decimal number to its binary representation (without using built-in methods like `toString(2)`).
// // Answer:
// let num = 13;
// let binary = ""
// for (;num>0; num = Math.floor(num/2)){
//     let rem = num%2
//     binary+=rem
// }
// console.log(binary)


// // ### Note: Question No. 8 & 10 are optional from above.
