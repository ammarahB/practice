// function myFunction() {
//     console.log("Welcome to my Visual Studio Code!");
//     console.log("We are learning JavaScript!:)");
// }
// myFunction();
// myFunction();

// function myFunction(msg) {
//     //parameter -> input
//     console.log(msg);
// }
// myFunction("I love JS!"); //argument

// function myFunction(n1, n2) {
//     console.log(n1 * n2);
// }
// myFunction(45, 35);

// function toSum (n1, n2) {
//     console.log(n1 + n2);
// }
// toSum(9, 3);

// function toSum (n1, n2) {
//     sum = n1 + n2; 
//     return sum;
// }
// let val = toSum(9, 3);
// console.log(val);

// //sum function

// function sum(x, y) {
//     return x+y;
// }

// const arrowSum = (a,  b) => {
//     console.log(a + b)
// }
// arrowSum(3,9)

// //multiplication function 

// function mul(a, b) {
//     return a*b;
// }

// const arrowMul = (a,  b) => {
//     console.log(a * b)
// }
// arrowMul(3,9)

// const printHello = () => {
//     console.log("Hello!")
// }

//Practice Qs

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         console.log(char); 
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//     }
//     }
//     return count;
// }

// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         console.log(char); 
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//         count++;
//     }
//     }
//     return count;
// }

//forEach Loop 

// let arr = [1, 2, 3, 4, 5]

// arr.forEach((val) => {
// console.log(val);
// });

//Practice Qs

// let arr = [2, 4, 6]

// arr.forEach((val, idx, arr) => {
//     squareVal = val ** 2
//     console.log("Square of each value =", squareVal, idx, arr)
// })

//Map Method 

// let nums = [45, 67, 54]

// let newNums = nums.map((val) => {
//     return val * 2 ;
// })

// console.log(newNums);

//Filter Method 

// let arr = [65, 42, 58, 79, 82, 26, 37, 96]

// let newArr = arr.filter((val) => {
//     return val > 50;
// })
// console.log(newArr);

//Reduce Method 

// let arr = [65, 42, 58, 79, 82, 26, 37, 96]

// // const newArr = arr.reduce((prev, curr) => {
// //     return prev > curr ? prev : curr;
// // })

// const newArr = arr.reduce((prev, curr) => {
//     return prev + curr;
// })

// console.log(newArr);

//Practice Qs1

// let marks = [82, 83, 91, 90, 93, 86, 97, 95, 85, 81, 83, 89, 94]

// let newMarks = marks.filter((val) => {
//     return val >= 90;
// })

// console.log(newMarks);

//Practice Qs2

// let n = prompt("Insert any number here:");

// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i
// }
// console.log(arr);

// let sum = arr.reduce((prev, curr) => {
//     return prev + curr;
// }) 

// console.log("sum = ", sum); 

// let factorial = arr.reduce((prev, curr) => {
//     return prev * curr;
// }) 

// console.log("factorial = ", factorial); 