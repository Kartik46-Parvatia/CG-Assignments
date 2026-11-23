// // Part C-a] `break` inside a  `for` Loop


// // 1. Write a `for` loop that searches for the first occurrence of the number 7 in an array. As soon as it finds 7, print its index and stop the loop using `break`.  
// // Answer:
// let arr = [45,5,7,5,2,6,95]
// for (let i=0; i<arr.length; i++){
//     if (arr[i]==7){
//         console.log("Index:",i)
//         break
//     }
// }


// // 2. Simulate a simple password checker: keep asking the user for a password (using a `for` loop that runs maximum 5 times). If the correct password is entered, print “Access granted” and `break`. If all 5 attempts fail, print “Account locked”.  
// // Answer:
// let password = "abc@123"
// let enteredPass = "abc@123"
// let i=0
// for (; i<5; i++){
//     if (password===enteredPass){
//         console.log("Access granted")
//         break
//     }
// }
// if (i==5){
//     console.log("Account Blocked")
// }


// // 3. Write a `for` loop that adds numbers from 1 onwards until the sum exceeds 100. Print the last number that was added before the sum crossed 100 and stop using `break`.  
// // Answer:
// let sum=0;
// for (let i=0; sum<100; i++){
//     sum+=i
//     if (sum>=100){
//         console.log(i-1)
//         break
//     }
// }


// // 4. Given an array of names, use a `for` loop to find the first name that starts with the letter “S”. Print that name and immediately stop the loop with `break`.  
// // Answer:
// let names = ["Vishal", "Grency", "Freya", "Nayan", "Sweni", "Utsav", "Chetan"]
// for (let i=0; i<names.length; i++){
//     if (names[i][0]=="S"){
//         console.log(names[i])
//         break
//     }
// }


// // 5. Create a `for` loop that prints numbers from 1 to 50. Stop completely (`break`) as soon as you encounter a number that is both a perfect square and greater than 20.
// // Answer:
// for (let i=1; i<=50; i++){
//     console.log(i)
//     if (i>20 && i**(1/2)===Math.floor(i**(1/2))){
//         break
//     }
// }
