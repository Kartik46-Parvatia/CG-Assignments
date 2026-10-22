**8. Predict the Output**  
Without running the code, predict what each `console.log` will print. Explain your reasoning (especially for `typeof`).

**Answer:**
```javascript
let person = { name: "Amit", age: 22 };
let colors = ["red", "green", "blue"];
function sayHi() {
  return "Hi!";
}
let empty = null;

console.log(typeof person);  // output => object , 
console.log(typeof colors);  // output => object ,
console.log(typeof sayHi);   // output => function ,
console.log(typeof empty);   // output => object ,
console.log(person.name);    // output => Amit ,
console.log(colors[1]);      // output => green ,
console.log(sayHi());        // output => Hi! ,
```

---

**9. Fix the Program**  
The following code has multiple errors related to objects, arrays, functions, naming rules, and best practices. Fix it so that it runs correctly.

```javascript
let 1student = { name: "Neha", Age: 19 }
let scores = 90, 85, 88
function greet {
  return "Hello " + name
}
const maxScore = 100
maxScore = 95
console.log(1student.name)
console.log(scores[0])
console.log(greet("Neha"))
```

**Answer:**
```javascript
let student = { name: "Neha", Age: 19 }
let scores = [90, 85, 88]
function greet(name1) {
  return "Hello " + name1
}
let maxScore = 100
maxScore = 95
console.log(student.name)
console.log(scores[0])
console.log(greet("Neha"))
```

---

**10. Concept Questions**  
Answer the following in your own words with examples:

a) What is the main difference between an **Object** and an **Array**?  
b) Why does `typeof null` return `"object"`? Is `null` really an object?  
c) Why is it recommended to keep arrays with a single data type?  
d) When should you use `const` and when should you use `let`?

**Answer:**

a) Object stores data using key value pairs , and array store values in ordered list.
example:
```javascript
// object 
const student = {
  name: "Rahul",
  age: 20,
  city: "Ahmedabad"
}
console.log(student.name); // Rahul

// array

const fruits = ["Apple", "Banana", "Mango"]
console.log(fruits[0]); // Apple
```


b) typeof null returns "object" because of a historical bug in JavaScript that was kept for backward compatibility.
example:
```javascript
console.log(typeof null);
// "object"
```


c) It is recommended to keep arrays with a single data type because it makes the code easier to understand, maintain, and process.


d) Use const when you do not need to reassign the variable. Use let when the variable's value needs to change.