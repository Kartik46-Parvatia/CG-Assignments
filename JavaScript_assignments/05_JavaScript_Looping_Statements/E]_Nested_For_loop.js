// // Part E] `Nested For Loop` Questions


// // 1. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
// // ```
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // ```
// // Answer:
// num = 1
// for (let i=1; i<=4; i++){
//     let string=""
//     for (let j=1; j<=i; j++){
//         string+=num+" "
//         num++
//     }
//     console.log(string)
// }


// // 2. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
// // ```
// // 1
// // 2 2
// // 3 3 3
// // 4 4 4 4
// // ```
// // Answer:
// for (let i=1; i<=4; i++){
//     let string=""
//     for (let j=1; j<=i; j++){
//         string+=i+" "
//     }
//     console.log(string)
// }


// // 3. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
// // ```
// // 1
// // 2 3
// // 4 5 6
// // 7 8 9 10
// // ```
// // Answer:
// for (let i=1; i<=4; i++){
//     let string=""
//     for (let j=1; j<=i; j++){
//         string+=j+" "
//     }
//     console.log(string)
// }


// // 4. Print the following pattern using nested `for` loops (without hard-coding any row):
// // ```
// // * * * *
// // *     *
// // *     *
// // * * * *
// // ```
// // Answer:
// for (let i=1; i<=4; i++){
//     let string=""
//     for (let j=1; j<=4; j++){
//         if (i===1 || i===4){
//             string+="* "
//         }else{
//             if (j===1 || j===4){
//                 string+="* "
//             }else{
//                 string+="  "
//             }
//         }
//     }
//     console.log(string)
// }


// // 5. Print the following right-triangle number pattern using nested `for` loops (without hard-coding any row):
// // ```
// // #
// // $ $
// // # # #
// // $ $ $ $
// // # # # # #
// // $ $ $ $ $ $
// // ```
// // Answer:
// for (let i=1; i<=6; i++){
//     let string=""
//     for (let j=1; j<=i; j++){
//         if (i%2==1){
//             string+="#"+" "
//         }else{
//             string+="$"+" "
//         }
//     }
//     console.log(string)
// }


// // 6. Print the following right-triangle alphabet pattern using nested `for` loops (without hard-coding any row):
// // ```
// // A
// // A B
// // A B C
// // A B C D
// // A B C D E
// // ```
// // Answer:
// for (let i=1; i<=5; i++){
//     let string=""
//     for (let j=1; j<=i; j++){
//         string+=String.fromCodePoint(64+j)+" "
//     }
//     console.log(string)
// }


// // 7. Print this hollow right-triangle star pattern using nested loops:
// // ```
// // *
// // * *
// // *   *
// // *     *
// // * * * * *
// // ```
// // Answer:
// for (let i=1; i<=5; i++){
//     let string=""
//     for (let j=1;j<=i; j++){
//         if (j==1 || j==i || i==5){
//             string+="* "
//         }else {
//             string+="  "
//         }
//     }
//     console.log(string)
// }


// // 8. Print the following reverse right-angle star pattern using nested `for` loops:
// // ```
// // *****
// // ****
// // ***
// // **
// // *
// // ```
// // Answer:
// for (let i=5; i>=1; i--){
//     let string=""
//     for (let j=1; j<=i; j++){
//         string+="*"
//     }
//     console.log(string)
// }


// // 9. Print the following reverse right-angle pattern where each row contains the row number repeated, using nested loops:
// // ```
// // 5 5 5 5 5
// // 4 4 4 4
// // 3 3 3
// // 2 2
// // 1
// // ```
// // Answer:
// for (let i=5; i>=1; i--){
//     string=""
//     for (let j=1; j<=i; j++){
//         string+=i+" "
//     }
//     console.log(string)
// }


// // 10. Print this reverse right-angle number pattern using nested `for` loops:
// // ```
// // 1 2 3 4 5
// // 1 2 3 4
// // 1 2 3
// // 1 2
// // 1
// // ```
// // Answer:
// for (let i=5; i>=1; i--){
//     string=""
//     for (let j=1; j<=i; j++){
//         string+=j+" "
//     }
//     console.log(string)
// }


// // 11. Print the following reverse right-angle pattern of consecutive numbers using nested loops:
// // ```
// // 15 14 13 12 11
// // 10  9  8  7
// //  6  5  4
// //  3  2
// //  1
// // ```
// // Answer:
// let num=15
// for (let i=5; i>=1; i--){
//     string=""
//     for (let j=1; j<=i; j++){
//         string+=num+" "
//         num--
//     }
//     console.log(string)
// }


// // 12. Print this reverse right-angle hollow star pattern (only the borders should have stars) using nested `for` loops:
// // ```
// // * * * * *
// // *     *
// // *   *
// // * *
// // *
// // ```
// // Answer:
// for (let i=5; i>=1; i--){
//     let string=""
//     for (let j=1; j<=i; j++){
//         if (i==5 || j==1 || j==i){
//             string+="* "
//         }else{
//             string+="  "
//         }
//     }
//     console.log(string)
// }


// // 13. Using nested `for` loops, print a 5×5 square of stars (`*`) but skip printing a star whenever the row number equals the column number (i.e., leave the main diagonal empty).
// // Answer:
// for (let i=1; i<=5; i++){
//     let string=""
//     for (let j=1; j<=5; j++){
//         if (j==i){
//             string+="  "
//         }else{
//             string+="* "
//         }
//     }
//     console.log(string)
// }


// // 14. Write nested `for` loops that print the multiplication table of numbers from 1 to 5, but only show the products that are even. (Each table should start on a new line.)
// // Answer:
// for (let i=1; i<=5; i++){
//     let string=""
//     for (let j=1; j<=10; j++){
//         if ((i*j)%2==0){
//             string+=(i*j)+" "
//         }else{
//             string+="  "
//         }
//     }
//     console.log(string)
// }


// // 15. Write a program to print a symmetric number palindrome pyramid on each row.
// // ```
// //     1
// //   1 2 1
// // 1 2 3 2 1
// // ```
// // Answer:
// for (let i=1; i<=3; i++){
//     let string=""
//     for (let j=1; j<=3-i; j++){
//         string+="  "
//     }
//     for (let k=1; k<=i; k++){
//         string+=k+" "
//     }
//     for (let l=i-1; l>=1; l--){
//         string+=l+" "
//     }
//     console.log(string)
// }
