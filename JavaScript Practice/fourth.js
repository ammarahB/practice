//Arrays 

// let items = ["soap", "toilet paper","towel", "toothbrush"];
// console.log(items);

// console.log(items[0]);

// let heroes = ["ironman", "captain america", "wonder woman", "antman", "black widow", "hulk", "black panther"];
// console.log(heroes.length);

//for loop

// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
// }

//for of

// for (let hero of heroes) {
// console.log(hero);
// }

// let cities = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Multan", "Peshawar", "Quetta"];

// for (let city of cities) {
//     console.log(city);
// }

//Practice Q1
// let marks = [85, 97, 44, 37, 76, 60];
// console.log(marks);

// let marksSum = [85 + 97 + 44 + 37 + 76 + 60];
// console.log(marksSum);
// let sum = 0;
// for (let val of marks) {
//     sum += val;
// }
// console.log(sum);

// let averageMarks = [sum/marks.length];
// console.log(`Average marks of the class = ${averageMarks}`);

//Practice Q2
// let itemPrices = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of itemPrices) {
//  console.log(`value of index ${i} = ${val}`);
//  let offer = val / 10;
//  itemPrices[i] -= offer
//  console.log(`value after offer = ${itemPrices[i]}`)
//  i++
// }

// for (let i = 0; i < itemPrices.length; i++) {
// let offer = itemPrices [i] / 10;
// itemPrices [i] -= offer;
// }

// console.log(itemPrices);

// let marks = [56, 78, 69, 45, 87, 59]

// for (let i = 0; i < marks.length; i++) {
//     let finalMarks = 5;
//     marks [i] -= finalMarks; 

// }
// console.log(marks); 

// for (let i = 0; i < marks.length; i++) {
//     let finalMarks = marks[i] / 5;
//     marks[i] -= finalMarks; 
// }

// console.log(marks);

//Arrays Methods 

// let veggies = ["onion", "potato", "chili", "tomato"];
// // console.log(veggies);
// console.log(veggies.toString());
// // veggies.push("cauliflower", "ladyfinger", "bringle");
// let deletedVeggie = veggies.pop()
// console.log(veggies);
// console.log("deleted", deletedVeggie);
// let numbers = [36, 25, 29, 33, 32];
// console.log(numbers.toString());
// let veggiesFruits = veggies.concat(fruits);
// console.log(veggiesFruits);
// let fruits = ["apple", "oranges", "banana", "melon"];
// fruits.unshift("watermelon");
// let val = fruits.shift();
// console.log("deleted", val)

// let heroes = ["ironman", "hulk", "thor", "antman", "spiderman", "captain america"];
// console.log(heroes);
// console.log(heroes.slice(1,4));

// let digits = [1, 2, 3, 4, 5, 6];

// digits.splice(2,2, 101, 102);

// //Add Element 
// digits.splice(3,0,90);

//Delete Element
// digits.splice(4, 1);

//Replace Element 
// digits.splice(5, 1, 7);

//Practice Qs

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// let val = companies.shift();

// console.log("deleted", val)

// companies.splice(2,1,"Ola")

// companies.push("Amazon");


