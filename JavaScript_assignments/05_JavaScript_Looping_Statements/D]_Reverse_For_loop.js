// // Part D] `Reverse` For Loop

// // 1. Write a reverse `for` loop that prints all numbers from 50 down to 1 that are divisible by 3 but **not** divisible by 9.  
// // Answer:
// for (let i=50; i>=1; i--){
//     if (i%3==0 && i%9!=0){
//         console.log(i)
//     }
// }


// // 2. Write a reverse `for` loop that calculates the product of all odd digits of a given number (example: 4729 → 7 × 9 = 63).   
// // Answer:
// let num=4729;
// let product=1;
// for (let i=num; i>0; i=Math.floor(i/10)){
//     let digit=i%10
//     if (digit%2!==0){
//         product=product*digit
//     }
// }
// console.log(product)


// // 3. Given the string `"Programming"`, use a reverse `for` loop to create a new string that contains only the consonants in reverse order. 
// // Answer:
// let string="Programming"
// let result=""
// for (let i=string.length-1; i>=0; i--){
//     if (string[i]!=="a"&&string[i]!=="e"&&string[i]!=="i"&&string[i]!=="o"&&string[i]!=="u"){
//         result+=string[i]
//     }
// }
// console.log(result)


// // 4. Write a reverse `for` loop that prints the first 15 Fibonacci numbers in **reverse order** (starting from the 15th number down to 0).
// // Answer:
// let a = 0
// let b = 1
// let fib = [0, 1]
// for (let i=2; i<15; i++){
//     let c = a+b
//     fib.push(c)
//     a=b
//     b=c
// }
// for (let i=14; i>=0; i--){
//     console.log(fib[i])
// }


// // 5. Use a reverse `for` loop to check whether a given number is a palindrome by comparing digits from both ends (without converting the number to a string).  
// // Answer:
// let num=1221
// let reverse=0
// for (let i=num; i>0; i=Math.floor(i/10)){
//     let digit=i%10
//     reverse=reverse*10+digit
// }
// if (num===reverse){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }


// // 6. Given an array `[12, 45, 7, 23, 56, 89, 34]`, use a reverse `for` loop to find the largest number that is less than 50 (do **not** use any built-in methods).   
// // Answer:
// let arr = [12, 45, 7, 23, 56, 89, 34]
// let largest = 0
// for (let i=arr.length-1; i>=0; i--){
//     if (arr[i]>largest && arr[i]<=50){
//         largest = arr[i]
//     }
// }
// console.log(largest)


// // 7. Given an array of temperatures `[32, 28, 41, 19, 35, 27, 38]`, use a reverse `for` loop to count how many days were colder than 30°C, starting from the last day.  
// // Answer:
// let temps = [32, 28, 41, 19, 35, 27, 38]
// let count = 0
// for (let i=temps.length-1; i>=0; i--){
//     if (temps[i]<30){
//         count+=1
//     }
// }
// console.log(count)


// // 8. Write a reverse `for` loop that converts a decimal number to its binary representation but prints the binary digits in reverse order (example: 13 → 1011 becomes 1101).  
// // Answer:
// let num = 13
// let binary = ""
// for (let i=num; i>0; i=Math.floor(i/2)){
//     let digit=i%2
//     binary=binary+digit
// }
// console.log(binary)


// // 9. **(Reverse For Loop + `break`)**  
// // Given an array `[90, 85, 70, 95, 60, 88, 75]`, use a reverse `for` loop to find the first score (starting from the end) that is greater than 80. Print that score and its index, then stop the loop using `break`.  
// // Answer:
// let score = [90, 85, 70, 95, 60, 88, 75]
// for (let i=score.length-1; i>=0; i--){
//     if (score[i]>80){
//         console.log("Index:",i,"Score:",score[i])
//         break
//     }
// }


// // 10. **(Reverse For Loop + `continue`)**  
// // Write a reverse `for` loop that prints numbers from 40 down to 1, but skips every number that is a perfect square using `continue`.
// // Answer:
// for (let i=40; i>=1; i--){
//     if (i**(1/2)%1==0){
//         continue
//     }else{
//         console.log(i)
//     }
// }
