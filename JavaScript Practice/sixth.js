// document.body.childNodes[1].innerText = "DOM Learning"

// let button = document.getElementById("myId")
// console.dir(button);

// let headings = document.getElementsByClassName("myClass")
// console.dir(headings);
// console.log(headings);

// let paragraphs = document.getElementsByTagName("p")
// console.dir(paragraphs);
// console.log(paragraphs);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);
// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// let headingFirst = document.querySelector(".myClass");
// console.dir(headingFirst);
// let headingsAll = document.querySelectorAll(".myClass");
// console.dir(headingsAll);

// let buttonId = document.querySelector("#myId");
// console.dir(buttonId);

// let divCompl = document.querySelector("div");
// console.dir(divCompl);
// let divComp = document.querySelector("div").children;
// console.dir(divComp);
// let ulCompl = document.querySelector("ul")
// console.dir(ulCompl);
// let ulComp = document.querySelector("ul").children;
// console.dir(ulComp);

// let heading = document.querySelector("h3");

//Practice Qs1

// let heading = document.querySelector("h2").innerText.concat(" from Apna College Students!");
// console.dir(heading);

// //Practice Qs2

// let divs = document.querySelectorAll(".box");
// console.dir(divs);

// let i = 1;
// for (let div of divs) {
//     div.innerText = `This box has a unique value of ${i}`
//     i++
// }
// divs[0].innerText = "Aquamarine Box"
// divs[1].innerText = "Blue Box"
// divs[2].innerText = "Red Box"

// let box1 = document.querySelector(".box").className = "Aquamarine Box";
// console.dir(box1);

// let box2 = document.querySelector(".box").className = "Blue Box";
// console.dir(box2);

// let box3 = document.querySelector(".box").className = "Red Box";
// console.dir(box3);

//Lecture 7

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id"); 
// console.log(id);

// let name = div.getAttribute("name")
// console.log(name);

// let para = document.querySelector("p");
// console.log(para);
// console.log(para.setAttribute("class", "Para"));

// let classPara = para.getAttribute("class"); 
// console.log(classPara);

// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "yellow";
// // div.style.visibility = "hidden"
// div.style.color = "black";
// div.style.fontSize = "25px";
// div.innerText = "Hello JS!";

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click me!";
// console.log(newbtn);
// let div = document.querySelector("div");
// let ul = document.querySelector("ul")
// ul.before(newbtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i> Hi, I'm leaning JavaScript! </i>";
// console.log(newHeading);
// document.querySelector("body").prepend(newHeading);
// newHeading.remove();

// let para = document.querySelector("p");
// para.remove();

//Practice Qs1 

// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// newbtn.style.backgroundColor = "red";
// newbtn.style.color = "white";

// document.querySelector("body").prepend(newbtn);

// //Practice Qs2

// let para = document.querySelector("p");
// para.classList.add("content");
