//          **PART-A**

// 1) A counter starts at 5. Use the increment operator to increase it by 1 and print the new value.
let counter = 5;
counter++
console.log(counter)

// 2) A player has 3 lives. Use the decrement operator to reduce one life and print the remaining lives.
let lives = 3;
lives--
console.log(lives)

// 3) Start with score = 10. Increase the score using ++ and print it.
let score = 10;
score++
console.log(score)

// 4) Start with items = 8. Decrease the items using -- and print it.
let items = 8;
items--
console.log(items)

// 5) Declare count = 0. Increment it twice and print the final value.
let count = 0;
count++;
count++;
console.log(count)



//          **PART-B**

// 6) Start with x = 5r
// Create y = x++
// Print both x and y.
// Explain why the values are different.

let x = 5;
y = x++
console.log(x,y)
// let y = x++; uses the postfix increment operator. This means y is assigned the current value of x first (which is 5), and then x is incremented by 1 (becoming 6).


// 7) Start with a = 5.
// Create b = ++a
// Print both a and b.
// Explain the difference from the previous question.

let a = 5;
b = ++a
console.log(a,b)
// let b = ++a uses prefix increment operator. This means b is also incremented with b (which is 6).


// 8) tart with lives = 3.
// Use post-decrement (lives--) and store the result in previousLives.
// Print both variables.

let lives1 = 3;
previousLives = lives1--
console.log(lives1,previousLives)


// 9) Start with attempts = 0.
// Use pre-increment (++attempts) and store the result in currentAttempts.
// Print both variables.

let attempts = 0
currentAttempts = ++attempts
console.log(attempts,currentAttempts)


// 10) Start with points = 100.
// Increase it using ++
// Then decrease it using --
// Print the final value.

let points = 100;
points++
points--
console.log(points)





//          **PART-C**

// 11) Predict the output:
let k = 10;
let l = k++;
let m = ++k;
console.log(k, l, m) // (12, 10, 12) //


// 12) Predict the output:
let c = 5;
let d = c-- + ++c;
console.log(c, d); // (5, 10) //


// 13) Predict the output:
let r = 7;
let f = --r + r++;
console.log(r, f) // (7, 12)


// 14) Predict the output:
let p = 3;
let q = p++ + ++p + p;
console.log(p, q) // (5, 13)


// 15) Predict the output:
let val = 0;
val = val++ + ++val;
console.log(val) // (2)