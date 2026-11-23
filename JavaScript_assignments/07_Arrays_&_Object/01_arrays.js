// 1. What Is an Array? =======================


// 1. What is the definition of an array in JavaScript?
// Ans=>
// Array is a collection of ordered values. Each value has a unique index number.


// 2. What is the technical term for the position of a value inside an array?
// Ans=>
// technical term is index.


// 3. At which number does the index of an array always start?
// Ans=>
// index of an array always starts with the number 0.


// 4. Given the array `var numbers = [10, 20, 30, 40];`, what value is stored at index `2`?
// Ans=>
// 30 is stored at index 2.


// 5. For the same array `var numbers = [10, 20, 30, 40];`, what is the index of the number `40`?
// Ans=>
// index of the value 40 is 3.



// 2. Creating Arrays ==========================



// 1. What are the two ways mentioned in the notes to create an array in JavaScript?
// Ans=>
// 1. using square brackets:
// const names = ["Aditya","Kartik","Om","Kashyap","Dhruv"];

// 2. using array constructor:
// const nums = new Array(1,2,3,4,5)


// 2. Which method of creating an array is recommended by the notes?
// Ans=>
// first method(using square brackets) is recommended by the notes.


// 3. Write the syntax to create an array named `students` containing the names `"Jenil"`, `"Mahir"`, `"Priyesha"`, and `"Yashvi"` using the recommended method.
// Ans=>
// const students = ["Jenil","Mahir","Priyesha","Yashvi"];


// 4. Write the syntax to create an array named `marks` containing `85`, `90`, and `78` using the `Array` constructor.
// Ans=>
// const marks = new Array(85, 90, 78)


// 5. What keyword is used when instantiating an array using the constructor approach?
// Ans=>
// the keyword "new" is used when instantiating an array using the constructor approach.



// 3. Accessing Values in an Array =========================



// 1. What do you use to access a specific value stored in an array?
// Ans=>
// index is used for accessing a specific value from array.


// 2. Given `var students = ["Jenil", "Mahir", "Priyesha"];`, what does `console.log(students[0]);` output?
// Ans=>
// var students = ["Jenil", "Mahir", "Priyesha"];
// console.log(students[10]);
// output is Jenil.


// 3. For the same array, what does `console.log(students[2]);` output?
// Ans=>
// 'Priyesha' is output for index 2.


// 4. What value does JavaScript return if you attempt to access an index that does not exist (such as `students[10]`)?
// Ans=>
// Javascript returns 'undefined' if you attempt to access an index that does not exist.


// 5. Write a line of code to log the first element of an array named `colors`.
// Ans=>
// let colors = ["blue","red","black","green"];
// console.log(colors[0])



// 4. Updating Values ========================



// 1. How do you update a specific value inside an existing JavaScript array?
// Ans=>
// let nums = [1, 2, 3, 4, 5];
// marks[1] = 6;
// console.log(nums); // [1, 6, 3, 4, 5]


// 2. Given `var marks = [80, 75, 90];`, what code would you write to change the second element (`75`) to `95`?
// Ans=>
// let marks = [80, 75, 90];
// marks[1] = 95;
// console.log(marks); // [80, 95, 90]


// 3. After executing the update from the previous question, what will `console.log(marks);` output?
// Ans=>
// [80, 95, 90]


// 4. True or False: You need to use a special built-in method like `update()` to change an array element's value.
// Ans=>
// False


// 5. Can you update a value at an index that is currently outside the bounds of the array? What happens if you assign a value to a much higher index?
// Ans=>
// yes we can update like this

// example
// let number = [1,2,3];
// number[10] = 10;
// console.log(number)  // [ 1, 2, 3, <7 empty items>, 10 ]



// 5. Array Length ===================



// 1. What is the name of the built-in property available on every JavaScript array that tells you how many items it contains?
// Ans=>
// name of the built in property is 'Array.length' that tells you how many items it contains.


// 2. Given `var arr = [1, 2, 3, 4];`, what does `console.log(arr.length);` output?
// Ans=>
// output is => 4


// 3. If an array is empty (contains no elements), what is its `length` property equal to?
// Ans=>
// if an Array is empty then its length is equal to 0.


// 4. Why is the `length` property particularly useful when working with arrays?
// Ans=>
// if an array has many values in it and you dont know how much value it contains. then length property helps you to find the numbers of elements in it.


// 5. Is `length` a function call (requiring parentheses `()`) or a property?
// Ans=>
// length is a property, not a function.It does not require a parentheses.



//  6. Looping Through Arrays ==========================



// 1. What are the two types of loops demonstrated in the notes for iterating through an array?
// Ans=>
// there are three types of loops for iterating through an array:
// a) for loop
// b) while loop
// c) for-of loop 


// 2. In a standard `for` loop, what condition is typically used to ensure the loop stops before going out of bounds? (`i < ...`)
// Ans=>
// i < array.length
// This condition ensures the loop stops before going out of the array's bounds.


// 3. In the `while` loop example, where is the increment step (`i++`) placed relative to the array access statement?
// Ans=>
// increment step is usually placed after the printing step( console.log() )
// let nums = [1,2,3,4,5];
// let i = 0;
// while (i<nums.length){
//     console.log(nums[i])
//     i++ // increment step
// } 


// 4. Write a `for` loop structure that prints every element of an array named `students`.
// Ans=>
// let students = ["Aditya","Om","Kashyap","Dhruv","Kartik"];
// for (let i=0; i<=students.length-1; i++){
//     console.log(students[i])
// }


// 5. What happens if your loop condition incorrectly uses `<=` instead of `<` alongside `students.length` when accessing elements?
// Ans=>
// It causes an out-of-bounds access, returning undefined for the last iteration.


// 6. Write a `for...of` loop that prints every element of an array named `subject`.
// Ans=>
// let subject = ["python","javascript","html","css"];
// for (let ele of subject){
//     console.log(ele)
// }


// 7. What is the main advantage of using a `for...of` loop over a traditional `for` loop when you only need the values (and not the indices)?
// Ans=>
// A for...of loop is simpler and cleaner because it directly accesses the values of an array without needing to manage indices.


// 8. Given `const colors = ["Red", "Blue", "Green"];`, what will the following code output?
// javascript
// for (const color of colors) {
//     console.log(color, indexOf(color));
// }
// Ans=>
// The code will produce a ReferenceError because indexOf() is not defined as a standalone function.



// 7. Adding Elements to Arrays =================



// 1. Which method is used to add an element at the **end** of an array?
// Ans=>
// array.push(value) is used to add an element at the end of an array.


// 2. Which method is used to add an element at the **beginning** of an array?
// Ans=>
// Array.unshift(value) is used to add an element at the beginning of an array.


// 3. Given `let nums = [1, 2, 3];`, write the code to add `4` at the end using the appropriate method. What will `console.log(nums);` show after that?
// Ans=>
// let nums = [1,2,3];
// nums.push(4);
// console.log(nums); // [ 1, 2, 3, 4 ]


// 4. Continuing from the previous question, write the code to add `0` at the beginning. What will the final array look like?
// Ans=>
// let nums = [1,2,3];
// nums.unshift(0);
// console.log(nums); // [ 0, 1, 2, 3 ]


// 5. True or False: `push()` and `unshift()` both modify the original array (they are mutating methods).
// Ans=>
// True.



// 8. Removing Elements ========================



// 1. Which method removes the **last** element of an array?
// Ans=>
// array.pop() is used to remove the last element of an array.


// 2. Which method removes the **first** element of an array?
// Ans=>
// array.shift() is used to remove the first element of an array.



// 3. Given `let nums = [100, 200, 300, 400, 500];`, what does `nums.pop();` do, and what will the array contain after calling it?
// Ans=>
// let nums = [100, 200, 300, 400, 500];
// nums.pop() // removes the last element(500)
// console.log(nums); // [ 100, 200, 300, 400 ]


// 4. After the previous operation, what does `nums.shift();` do, and what will the remaining array contain?
// Ans=>
// let nums = [100, 200, 300, 400, 500];
// nums.shift() // removes the first element(100)
// console.log(nums); // [ 200, 300, 400, 500 ]


// 5. Do `pop()` and `shift()` return the removed element, or do they only modify the array?
// Ans=>
// this methods also returns the removed elements if we declare the variable and stores this method.

// let nums = [100, 200, 300, 400, 500];
// let poppedEle = nums.pop();
// console.log(nums); // prints the array after removing the element 
// console.log(poppedEle); // prints removed element



// 9. Searching in Arrays ======================



// 1. What does the `indexOf()` method return when the searched value is found in the array?
// Ans=>
// 'indexOf' returns the index of an element we put in.


// 2. What does `indexOf()` return when the value is **not** present in the array?
// Ans=>
// it returns -1 ,if the value is not present in the array. 


// 3. Given `const names = ["Jenil", "Mahir", "Arjun"];`, what does `console.log(names.indexOf("Mahir"));` output?
// Ans=>
// output is => 1


// 4. For the same array, what does `console.log(names.indexOf("Krishna"));` output?
// Ans=>
// output is => -1


// 5. Write a line of code that finds the index of `"Priyesha"` in an array named `students`.
// Ans=>
// const names = ["Jenil","Dhruv","Om","Priyesha","Kashyap"];
// console.log(names.indexOf("Priyesha"));



// 10. Array with Different Data Types ========================



// 1. Can a JavaScript array store values of different data types (e.g., number, string, boolean, null) in the same array?
// Ans=>
// Yes, a JavaScript array can store values of different data types in the same array. For example, an array can contain a number, a string, a boolean, and null all together.


// 2. Write the syntax to create an array named `data` that contains a number, a string, a boolean, and `null`.
// Ans=>
// const data = [42, "Hello", true, null];


// 3. How can you check the data type of each element in such an array?
// Ans=>
// You can use the `typeof` operator to check the data type of each element in the array. For example, `typeof data[0]` will return the data type of the first element.


// 4. Given `const data = [100, "Hello", true, null];`, what does `typeof data[0]` return?
// Ans=>
// typeof data[0] // returns "number"


// 5. What does `typeof data[2]` return for the same array?
// Ans=>
// typeof data[2] // returns "boolean"



// 11. Array of Arrays (Matrix) – 2D Arrays  ==========================



// 1. Create a 4×2 matrix and print **all elements of the second column**. 
// Ans=>
// let matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8]
// ]
// console.log(matrix[0][1]); // 2
// console.log(matrix[1][1]); // 4
// console.log(matrix[2][1]); // 6
// console.log(matrix[3][1]); // 8


// 2. Given this matrix of student marks, print only the marks of the **third student**:  
//    ```javascript
//    const marks = [
//        [85, 90, 78],
//        [70, 75, 80],
//        [88, 82, 95],
//        [60, 65, 70]
//    ];
//    ```  
// Ans=>
// for (let i=0; i<marks[2].length; i++){
//     console.log(marks[2][i]);
// }


// 3. Write code to find and print the **total number of elements** present in a 3×4 matrix.  
// Ans=>
// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// console.log("Total number of elements:", matrix.length * matrix[0].length);


// 4. Create a 3×3 matrix filled with numbers 1 to 9. Then update the **center element** (index `[1][1]`) to `0` and print the matrix.  
// Ans=>
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// matrix[1][1] = 0;
// console.log(matrix);


// 5. Access and print the element that is present at the **first row and last column** of any 3×3 matrix you create.
// Ans=>
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[0][2]); // 3



// 12. Real-World Example =========================

// ```
// const marks = [
//     [85, 90, 92], // Jenil
//     [70, 75, 80], // Arjun
//     [88, 82, 89]  // Krishna
// ];

// for (let i = 0; i < marks.length; i++) {
//     const studentMarks = marks[i];
//     const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
//     const avg = total / 3;
//     console.log("Student " + (i + 1) + " average: " + avg);
// }
// ```

// 1. In the given marks example, what does `marks[i]` represent inside the loop?
// Ans=>
// marks[i] represents the array of marks for the i-th student. For example, when i=0, marks[0] is [85, 90, 92], which are the marks for Jenil.


// 2. Why do we use `marks.length` in the outer loop instead of hard-coding the number 3?  
// Ans=>
// We use marks.length in the outer loop to make the code dynamic and adaptable to any number of students. If we hard-code the number 3, the code would only work for exactly 3 students. Using marks.length allows the loop to iterate through all students regardless of how many there are in the array.


// 3. What will happen if one student has only 2 subject marks instead of 3? (Think about the calculation)
// Ans=>
// If one student has only 2 subject marks instead of 3, the calculation for the total and average will be incorrect. The code assumes that each student has exactly 3 marks, so if a student has fewer marks, it will result in an undefined value when trying to access the third mark, leading to NaN (Not a Number) in the total and average calculations.



// 13. Common  Mistakes & Misconceptions =========================




// 1. What does the following code output?  
//    ```javascript
//    const arr = [10, 20, 30];
//    console.log(arr[3]);
//    ```  
// Ans=>
// undefined



// 3. Why is this code considered wrong?  
//    ```javascript
//    arr[arr.length] = 10;
//    ```  
// Ans=>
// This code is considered wrong because it attempts to add a new element (10) at the index equal to the current length of the array. While this will work to add an element at the end of the array, it is not a recommended practice. The preferred way to add an element to the end of an array is to use the `push()` method, which is more readable and less error-prone.



// 4. Correct the above code so that 40 is properly added at the end of the array on the place of 30:  
//    ```javascript
//    let arr = [10, 20, 30];
//    arr[arr.length] = 40;
//    ```  
// Ans=>
// let arr = [10, 20, 30];
// arr.push(40); 
// console.log(arr); // Output: [10, 20, 30, 40]



// 5. What is a “sparse array”? Give one example of how it can be created accidentally.  
// Ans=>
// A sparse array is an array that has empty slots (gaps) between its elements. It can be created accidentally by using the `delete` operator on an array element or by initializing an array with a length greater than the number of elements it contains.


// 6. True or False: Accessing an invalid index throws an error in JavaScript.  
// Ans=>
// False. Accessing an invalid index in JavaScript returns `undefined` and does not throw an error.


// 7. What is the difference between an array and an object in JavaScript? (One key difference)
// Ans=>
// An array is an ordered collection of elements indexed by numbers, while an object is an unordered collection of key-value pairs indexed by strings.



// 14. Practice Exercises =========================



// 1. Given the array:  
//    `const numbers = [12, 7, 18, 25, 4, 9, 30];`  
//    Print only the **even numbers** using a loop.
// Ans=>
// const numbers = [12, 7, 18, 25, 4, 9, 30];
// for (let i=0; i < numbers.length; i++){
//     if (numbers[i]%2==0){
//         console.log(numbers[i]);
//     }
// }


// 2. Given the array:  
//    `const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];`  
//    Print all city names in **reverse order** (last to first) using a loop.
// Ans=>
// const cities = ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Bhavnagar"];
// for (let i=cities.length-1; i>=0; i--){
//     console.log(cities[i])
// }


// 3. Given the array:  
//    `const scores = [12, 45, 7, 89, 23];`  
//    Find and print the **second largest** number.
// Ans=>
// const scores = [12, 45, 7, 89, 23];
// const scores = [12, 45, 7, 89, 23];
// scores.sort((a, b) => b - a);
// console.log(scores[1]);


// 4. Given the array:  
//    `const colors = ["Red", "Blue", "Green", "Yellow"];`  
//    Use `push()` to add `"Purple"` at the end and `unshift()` to add `"Black"` at the beginning. Then print the final array.
// Ans=>
// const colors = ["Red", "Blue", "Green", "Yellow"];
// colors.push("Purple");
// colors.unshift("Black");
// console.log(colors); // Output: ["Black", "Red", "Blue", "Green", "Yellow", "Purple"]


// 5. Given the matrix:  
//    ```javascript
//    const matrix = [
//        [10, 20, 30],
//        [40, 50, 60]
//    ];
//    ```  
//    Calculate and print the **sum of all elements**.
// Ans=>
// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60]
// ];
// let sum = 0;
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         sum += matrix[i][j];
//     }
// }
// console.log(sum);


// 6. Given the array:  
//    `const marks = [45, 67, 89, 32, 76, 91, 54];`  
//    Count how many numbers are **greater than 50** and print the count.
// Ans=>
// const marks = [45, 67, 89, 32, 76, 91, 54];
// let count = 0;
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 50) {
//         count++;
//     }
// }
// console.log(count);


// 7. Given the matrix:  
//    ```javascript
//    const matrix = [
//        [1, 2, 3],
//        [4, 5, 6],
//        [7, 8, 9]
//    ];
//    ```  
//    Print only the **main diagonal elements** (1, 5, 9).
// Ans=>
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i][i]);
// }



// 15. Multiple Choice Questions ========================

// **Q1.** What will be the output of the following code?  
// ```javascript
// const arr = [5, 10, 15, 20];
// console.log(arr[arr.length - 1]);
// ```  
// a) 5  
// b) 10  
// c) 15  
// d) 20 
// Ans=> 
// d) 20


// **Q2.** Which of the following correctly adds an element at the **beginning** of an array?  
// ```javascript
// const arr = [10, 20, 30];
// ```  
// a) `arr.push(5)`  
// b) `arr.pop(5)`  
// c) `arr.unshift(5)`  
// d) `arr.shift(5)`  
// Ans=>
// c) `arr.unshift(5)`


// **Q3.** What does the following code print?  
// ```javascript
// const fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.indexOf("Orange"));
// ```  
// a) 0  
// b) 2  
// c) -1  
// d) undefined  
// Ans=>
// c) -1


// **Q4.** Which statement about JavaScript arrays is **true**?  
// a) Arrays can only store numbers  
// b) Arrays are always sorted  
// c) Arrays can store mixed data types  
// d) Array indexes start from 1  
// Ans=>
// c) Arrays can store mixed data types


// **Q5.** What is the output of this code?  
// ```javascript
// let nums = [1, 2, 3];
// nums.pop();
// nums.push(4);
// console.log(nums);
// ```  
// a) [1, 2, 3, 4]  
// b) [1, 2, 4]  
// c) [2, 3, 4]  
// d) [1, 2, 3]  
// Ans=>
// b) [1, 2, 4]


// **Q6.** In the following 2D array, what does `matrix[2][1]` return?  
// ```javascript
// const matrix = [
//     [10, 20],
//     [30, 40],
//     [50, 60]
// ];
// ```  
// a) 30  
// b) 40  
// c) 50  
// d) 60  
// Ans=>
// d) 60


// **Q7.** What will be printed?  
// ```javascript
// const data = [10, "Hello", false];
// console.log(typeof data[1]);
// ```  
// a) number  
// b) string  
// c) boolean  
// d) object  
// Ans=>
// b) string



