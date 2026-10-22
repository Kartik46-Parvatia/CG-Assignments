**1. Create an Object**  
Create an object named `student` with the following properties:
- `name` → `"Riya"`
- `age` → `18`
- `isEnrolled` → `true`  

Print the entire object and then print each property individually.

**Answer:**
```javascript
let student = {
    name:"Aditya",
    age:17,
    isEnrolled:true,
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.isEnrolled)
```


**2. Work with Arrays**  
Create two arrays:
- `scores` containing only numbers: `85, 92, 78, 90`
- `mixedData` containing different types: a number, a string, a boolean, and `null`  

Print both arrays. Also print the first and last element of the `scores` array using index.

**Answer:**
```javascript
let scores = [85, 92, 78, 90]
let mixedData = [77,"java",false,null]
console.log(scores)
console.log(mixedData)
console.log(scores[0])
console.log(scores[3])
```


**3. Declare and Call a Function**  
Write a function named `calculateArea` that takes two parameters (`length` and `width`) and returns the area of a rectangle.  
Call the function twice with different values and print the results.

**Answer:**
```javascript
function calculateArea(length,width){
    return(length*width)
}
console.log(calculateArea(12,20))
console.log(calculateArea(10,7))
```


**4. Check Types with `typeof`**  
Create variables of the following types and print both the value and its type using `typeof`:
- A number  
- A string  
- A boolean  
- `null`  
- An object  
- An array  
- A function  

Observe and note any surprising results (especially with `null` and arrays).

**Answer:**
```javascript
let number = 369;
console.log(number)
console.log(typeof number)

let string = "javascript";
console.log(string)
console.log(typeof string)

let bool = true;
console.log(bool)
console.log(typeof bool)

let null1 = null;
console.log(null1)
console.log(typeof null1)  // it is null type but when we check its datatype using typeof , it shows 'object' datatype . it is because of javascript quirk.

let object ={
    name: "aditya",
}
console.log(object)
console.log(typeof object)

array = [1,2,3,4,5]
console.log(array)
console.log(typeof array)

function sum(a,b){
    return (a+b)
}
console.log(sum(5,15))
console.log(typeof sum)
```


