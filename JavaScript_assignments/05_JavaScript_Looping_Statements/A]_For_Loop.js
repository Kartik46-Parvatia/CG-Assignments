// Part A] For Loop


// Q1. Counting Numbers
// A teacher wants students to practice counting. Write a program to print all numbers from 1 to 15.

// **Sample Output:**
// ```
// 1
// 2
// 3
// 4
// 5
// ...
// 15
// ```

// Answer:
// for (let i=0; i<15; i++){
//     console.log(i+1)
// }


// Q2. Even Numbers
// A school has lockers numbered with even numbers for a special activity. Write a program to print all even numbers from 2 to 40.

// Sample Output:
// ```
// 2
// 4
// 6
// 8
// 10
// ...
// 40
// ```

// Answer:
// for (let i=0; i<40; i+=2){
//     console.log(i+2)
// }


// Q3. Odd Numbers
// A fitness coach assigns odd numbers to participants for a special activity. Write a program to print all odd numbers from 1 to 35.

// Sample Output:
// ```
// 1
// 3
// 5
// 7
// 9
// ...
// 35
// ```

// Answer:
// for (let i=0; i<35; i+=2){
//     console.log(i+1)
// }


// Q4. Saving Money
// You save ₹10 on Day 1, ₹20 on Day 2, ₹30 on Day 3, and continue increasing your daily savings by ₹10. Write a program to calculate your total savings after 10 days.

// Sample Output:
// ```
// Total savings after 10 days: ₹550
// ```

// Answer:
// let total=0;
// let saving=10;
// for (let day=0; day<10; day++,saving+=10){
//     total=total+saving
// }
// console.log(total)


// Q5. Multiplication Table
// You want to practice multiplication. Write a program to print the multiplication table of 12, from 12 × 1 to 12 × 10.

// Sample Output:
// ```
// 12 x 1 = 12
// 12 x 2 = 24
// 12 x 3 = 36
// 12 x 4 = 48
// 12 x 5 = 60
// 12 x 6 = 72
// 12 x 7 = 84
// 12 x 8 = 96
// 12 x 9 = 108
// 12 x 10 = 120
// ```

// Answer:
// for (let i=1; i<=10; i++){
//     console.log(12,"x",i,"=",12*i)
// }


// Q6. Daily Water Intake 
// You drink 3 glasses of water every day. Write a program to calculate the total number of glasses you drink over 7 days. Print the cumulative total after each day.

// Sample Output:
// ```
// Day 1: 3 glasses
// Day 2: 6 glasses
// Day 3: 9 glasses
// Day 4: 12 glasses
// Day 5: 15 glasses
// Day 6: 18 glasses
// Day 7: 21 glasses
// ```

// Answer:
// let total=0;
// for (let day=1; day<=7; day++){
//     total+=3
//     console.log("Day",day+":",total,"glasses")
// }


// Q7. Shopping Calculation
// One chocolate costs ₹15. Write a program to print the total cost of buying 1 to 10 chocolates.

// Sample Output:
// ```
// 1 chocolate = ₹15
// 2 chocolates = ₹30
// 3 chocolates = ₹45
// 4 chocolates = ₹60
// 5 chocolates = ₹75
// 10 chocolates = ₹150
// ```

// Answer:
// let totalCost = 0;
// for (let i=1; i<=10; i++){
//     totalCost+=15;
//     console.log(i,"Chocolates =","₹"+totalCost)
// }


// Q8. Sum of Even Numbers
// You want to calculate the sum of all even numbers between 2 and 30, including both 2 and 30. Write a program to calculate and print the total.

// Sample Output:
// ```
// Sum of even numbers: 240
// ```

// Answer:
// let total = 0;
// for (let i=0; i<30; i+=2){
//     total = total + i + 2
// }
// console.log("Sum of even numbers:",total)


// Q9. Weekly Exercise 
// You do 5 push-ups on Day 1, 10 on Day 2, 15 on Day 3, and continue increasing the number by 5 each day. Write a program to print the number of push-ups for each day over 7 days.

// Sample Output:
// ```
// Day 1: 5 push-ups
// Day 2: 10 push-ups
// Day 3: 15 push-ups
// Day 4: 20 push-ups
// Day 5: 25 push-ups
// Day 6: 30 push-ups
// Day 7: 35 push-ups
// ```

// Answer:
// let totalPushUps = 5;
// for (let day=1; day<=7; day++, totalPushUps+=5){
//     console.log("Day",day+":",totalPushUps,"push-ups")
// }


// Q10. Movie Tickets
// One movie ticket costs ₹150. Write a program to print the total ticket cost for 1 to 8 people.

// Sample Output:
// ```
// 1 person: ₹150
// 2 people: ₹300
// 3 people: ₹450
// 4 people: ₹600
// 5 people: ₹750
// 6 people: ₹900
// 7 people: ₹1050
// 8 people: ₹1200
// ```

// Answer:
// let totalCost = 0;
// for (let people=1; people<=8; people++){
//     totalCost+=150
//     console.log(people,"People:","₹"+totalCost)
// }