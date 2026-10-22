**5. Valid vs Invalid Variable Names**  
Identify which of the following variable names are **valid** and which are **invalid**. For invalid ones, explain why.

**Answer:**
```javascript
let userName;       // Valid
let 2ndPlace;       // Invalid --> because variable name cannot start with numbers.
let _privateData;   // Valid
let $price;         // Valid
let my-age;         // Invalid --> because we cannot use special characters in variable name expect underscore(_) and dollar($).
let function;       // Invalid --> function is a reserved keyword in JavaScript, so it cannot be used as a variable name.
let totalCount;     // Valid
let const;          // Invalid --> const is a reserved keyword and cannot be used as a variable name.
```

---

**6. Apply Best Practices**  
Rewrite the following poorly written code using best practices (`const`/`let`, meaningful names, camelCase, UPPERCASE for constants):

```javascript
let x = 10;
let y = 5;
let a = x * y;
let b = 100;
```
**Answer:**
```javascript
const length = 10;
const width = 5;
const area = length * width;
const MAX_VALUE = 100;
```

---

**7. Declaration & Assignment**  
Write code that demonstrates:
- Declaring a variable without assigning a value, then assigning a value later  
- Declaring and assigning a value in one step  
- Creating a constant that cannot be changed  

Print all variables.

**Answer:**
```javascript
let x;
x = 10;

let y = 20;

const z = 30;

console.log(x)
console.log(y)
console.log(z)
```
