//Sync in JS

// console.log("one");
// console.log("two");

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello,2000) //timeout; 2s = 2000ms

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

//Callbacks

//sync programming

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(3, 4, sum); //right
// calculator(3, 4, (a, b) => {
//     console.log(a + b);
// }); //right
// calculator(3, 4, sum()); //wrong

//async programming

// const hello = () => {
//     console.log("hello");
// };

// setTimeout(hello, 4000);

// Nesting 

//nested if else

// let age = 19;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior")
//     } else {
//         console.log("middle")
//     }
// } else {
//     console.log("ineligible")
// }

// //nested loops

// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//     str = str + j;
//     }
//     console.log(i, str);
// }

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData(); 
//         }
//     }, 2000);
// }

// // getData(1, getData(2)); //wrong

// //Callback hell

// getData(1, () => {
//     console.log("getting data 2....");
//     getData(2, () => {
//         console.log("getting data 3....");
//         getData(3, () => {
//             console.log("getting data 4....");
//             getData(4);
//         });
//     });
// }) //right

// Promises 

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise.");
//     reject("some error occured");
// })

// const getPromise = () => {
//    return new Promise((resolve, reject) => {
//         console.log("I am a promise.");
//         resolve("success");
//         // reject("some error occured");
//     })    
// }

// let promise = getPromise();
// promise.then((res) => {
//      console.log("promise fulfilled", res);
// })

// promise.catch((err) => {
//     console.log("promise rejected", err);
// })

// //it will give fulfilled after 5s
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("success");
//             // reject("error")
//             if(getNextData) {
//                 getNextData(); 
//             }
//         }, 5000);
//     })
// }

// Promise Chain 

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
// setTimeout(() => {
//     console.log("data1");
//     resolve("success");
// }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
// setTimeout(() => {
//     console.log("data2");
//     resolve("success");
// }, 4000);
//     });
// }

//elaborated way

// console.log("fetching data1...")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2...")
//     let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });
// })

// easiest way 

// console.log("fetching data1...")
// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("fetching data2...")
//     asyncFunc2().then((res) => {
//     console.log(res);
// });
// })

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 5000);
//     });
// }

//Apply Promise Chain to Callback hell

// console.log("getting data 1....");
// getData(1, () => {
//     console.log("getting data 2....");
//     getData(2, () => {
//         console.log("getting data 3....");
//         getData(3, () => {
//             console.log("getting data 4....");
//             getData(4);
//         });
//     });
// })

// A promise chain for getData

// getData(1).then((res) => {
// console.log(res);
//     getData(2).then((res) => {
//     console.log(res);
//         getData(3).then((res) => {
//         console.log(res);
//             getData(4).then((res) => {
//                 console.log(res);
//             });
//     });
// });
// });

//Actual Promise Chain, right way to write!

// console.log("getting data 1....");
// getData(1).then((res) => {
//     console.log("getting data 2....");
//    return getData(2);
//     })
//     .then((res) => {
//         console.log("getting data 3....");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log("getting data 4....");
//         return getData(4);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// Async Await 

// async function hello() {
//  console.log("hello");
// }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("weather data");
//         resolve(200);
//         }, 4000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 5000);
//     });
// }

//Apply Async-await to getData

// async function getAllData() {
//     console.log("getting data 1....");
//     await getData(1)
//     console.log("getting data 2....");
//     await getData(2)
//     console.log("getting data 3....");
//     await getData(3)
//     console.log("getting data 4....");
//     await getData(4)
// }

// IIFE

//1 (function() {})(); 
//2 (() => {})();
//3 (async() {})();

// (async function () {
//     console.log("getting data 1....");
//     await getData(1)
//     console.log("getting data 2....");
//     await getData(2)
//     console.log("getting data 3....");
//     await getData(3)
//     console.log("getting data 4....");
//     await getData(4)
// })();