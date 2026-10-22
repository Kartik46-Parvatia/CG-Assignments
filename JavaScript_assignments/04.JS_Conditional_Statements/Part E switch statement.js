// Question 1
// let month = 10

// switch (true){
//     case month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12:
//         console.log("31 days");
//         break;
//     case month == 4 || month == 6 || month == 9 || month == 11:
//         console.log("30 days");
//         break;
//     case month == 2:
//         console.log("28 days");
//         break;
//     default:
//         console.log("Invalid month number!");
// }


// Question 2
// let character = "a"

// switch (true){
//     case character == "a" || character == "e" || character == "i" || character == "o" || character == "u" || character == "A" || character == "E" || character == "I" || character == "O" || character == "U":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }


// Question 3
// let number = 2;

// switch (true){
//     case number == 1 || number == 2:
//         console.log("Winter");
//         break;
//     case number == 3 || number == 4:
//         console.log("Summer");
//         break;
//     default:
//         console.log("Invalid Number!");
// }


// Question 4
// let marks = 65

// switch (true){
//     case marks>=75:
//         console.log("Distinction");
//         break;
//     case marks>=60:
//         console.log("1st class");
//         break;
//     case marks>=50:
//         console.log("2nd class");
//         break;
//     case marks>=35:
//         console.log("3rd class");
//         break;
//     default:
//         console.log("Failed");
// }


// Question 5
// let role = "admin"

// switch (role){
//     case "admin":
//         let action = "create"
//         switch (action) {
//             case "create":
//                 console.log("Create");
//                 break;
//             case "edit":
//                 console.log("Edit");
//                 break;
//             case "delete":
//                 console.log("Delete");
//                 break;
//         }
//         break;
//     case "user":
//         console.log("Limited Access");
//         break;
// }


// Question 6
// let fruit = "mango";

// switch (fruit) {
//   case "apple":
//     console.log("Apple is red");
//     break;
//   case "mango":
//     console.log("Mango is yellow");
//     break;
//   case "banana":
//     console.log("Banana is yellow");
//     break;
//   default:
//     console.log("Unknown fruit");
// }

// Output:
// Mango is yellow
// Banana is yellow
// Unknown fruit

// Because there was no break statement to stop the further execution, every single case ran


// Question 7
// let value = null
// switch (value){
//     case 0:
//         console.log("Value is 0");
//         break;
//     case "0":
//         console.log("Value is 0 as a string");
//         break;
//     case null:
//         console.log("Value is null");
//         break;
//     case false:
//         console.log("Value is false");
//         break;
//     case undefined:
//         console.log("Value is undefined");
//         break;
//     default:
//         console.log("Invalid Value");
// }


// Question 8
// let num1 = 24
// let num2 = 56
// let operator = "*"

// switch (operator){
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "**":
//         console.log(num1 ** num2);
//         break;
//     case "/":
//         switch (num2) {
//             case 0:
//                 console.log("Error! Can't divide by zero");
//                 break;
//             default:
//                 console.log(num1 / num2);
//                 break;
//         }
//         break;
//     default:
//         console.log("Invalid Operator!");
// }


// Question 9
// let date = 12

// switch (true){
//     case date>=1 && date<=10:
//         console.log("Beginning of the month");
//         break;
//     case date>=11 && date<=20:
//         console.log("Middle of the month");
//         break;
//     case date>=21 && date<=31:
//         console.log("End of the month");
//         break;
//     default:
//         console.log("Invalid Date!");
// }
