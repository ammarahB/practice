
//LOOPS
// for (let count = 1; count <= 5; count++) {
//     console.log("Ammarah Bano");
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("i =", i);
// }

// //Calculate sum of 1 to 10
// let sum = 0;
// for (let i =1; i <= 10; i++) {
//     sum = sum + i;
// }
// console.log("sum =", sum);
// console.log("loop has ended");

// let i = 1;
// while (i <= 5) {
//     console.log("Ammarah")
//     i++;
// }

// let i = 20;
// do {
//     console.log("Ammarah")
//     i++
// } while (i <= 10);

// let str = "Ammarah"
// for (let i of str) {
//     console.log("i =", i);
// }

// let str = "Ammarah"
// let size = 0;
// for (let val of str) {
//     console.log("val =", val);
//     size++
// }
// console.log("string size =", size)

// let student = {
//     name: "Ammarah",
//     age: 30,
//     cgpa: 3.75,
//     isPass: true 
// }; 

// for (let key in student) {
//     console.log("key =", key, "value =", student[key]);
// }

//Practice Set

// for (let num = 0; num <= 100; num++) {
// if (num%2 === 0) {
//         console.log("num =", num)
//     }
// }

// let gameNum =75;
// let userNum = prompt("Guess the game number:")

// while (userNum != gameNum) {
//     userNum = prompt("You have guessed the wrong number. Guess again!")
// }
// console.log("Congratulations! You've guessed the right number!")

//Guessing the right surname by users

// let surname = "Sabzwari";
// let userGuess = prompt("Guess the right surname:")

// while (userGuess != surname) {
//     userGuess = prompt("You've guessed the wrong surname. Try again!")
// }
// console.log("Congratulations! You've guessed the right surname!")

//STRINGS

// let str = "Ammarah"
// console.log(str[5]);

//Template Literals 

// let specialString = `This is my template literal`;
// console.log(specialString);

// let priceList = {
//     item: "ShoeRack",
//     price: 840
// };

// let output = `The cost of ${priceList.item} is ${priceList.price} rupees written in priceList.`;
// console.log(output);

// let str = "  Ammarah  "
// console.log(str.trim());

// let str1 = "Ammarah";
// let str2 = "Bano"
// console.log(str1.concat(str2))

// let str = "Talha"

// console.log(str.replace("ha","ma"))

// let str = "IloveJavascript"
// console.log(str.charAt(6))

// let fullName = prompt("Enter your FULL NAME here without spaces:");
// let userName = "@" + fullName + fullName.length
// console.log(userName)