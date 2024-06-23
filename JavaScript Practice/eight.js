//Prototypes

// const student = {
//     fullName: "Ammarah",
//     cgpa: 3.76,
//     printCgpa: function () {
//         console.log("cgpa =", this.cgpa);
//     },
// };

// const employee = {
//     //Function can be written as this too
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const talhaHussain = {
//     salary: 50000,
// };

// talhaHussain.__proto__ = employee;

//Classes

// class ToyotaCar {
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner")
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus")

// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("creating an object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus", 8);
// console.log(lexus);

//inheritance

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let Obj = new Child();


// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     work() {
//     console.log("solve problems", "build something");
// }
// }

// class Doctor extends Person {
//     work() {
//     console.log("Treat pateints");
// }
// }

// let ammarahObj = new Engineer();
// let ammarahObj2 = new Doctor();

// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     constructor(branch) {
//         super(); 
//         this.branch = branch;
//     }
//     work() {
//     console.log("solve problems", "build something");
// }
// }

// let engObj = new Engineer("chemical engineer");

// class Person {
//     constructor(name) {
//         this.species = "homo sapiens";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     constructor(name) {
//         super(name); 
//     }
//     work() {
//         super.eat();
//     console.log("solve problems", "build something");
// }
// }

// let engObj = new Engineer("Ammarah");

// Practice Qs

// class User {
// constructor(name, email) {
//     this.name = name;
//     this.email = email;
// }
//     viewData() {
//         console.log("Check your Data here!")
//     }
// }

// let student1 = new User("Ammarah", "ammarahsab5@gmail.com");
// let student2 = new User("Talha", "talhahussain4@gmail.com");
// let teacher1 = new User("Qaiser", "qaiser78@gmail.com");

// class Admin extends User {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         console.log("Edit your Data here!")
//     }
// }


// let admin1 = new Admin("admin", "admin@college.com");

// Error Handling 

// let a = 5;
// let b = 7;

// console.log("a =", a);
// console.log("b =", b);
// console.log("a + b =", a + b);
// try {
//     console.log("a + b =", a + c);  
// } catch(err) {
//     console.log(err);
// }
// console.log("a - b =", a - b);