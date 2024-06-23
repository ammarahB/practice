// let btn2 = document.querySelector('#btn2');

 // btn2.ondblclick = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     // console.log("btn2 was double clicked");
// //     // let a = 12;
// //     // a++
// //     // console.log(a);
// }

// let div = document.querySelector('div');
// div.onmouseover = (evt) => {
//     console.log(evt.clientX, evt.clientY, evt.target, evt.type);
//     console.log("We are inside the div");
// }

//Event Listener 

// let btn2 = document.querySelector('#btn2');

// btn2.addEventListener("click", (evt) => {
//     console.log("button2 was clicked - H1")
//     // console.log(evt);
//     // console.log(evt.type);
// })

// let handler2 = () => {
//     console.log("button2 was clicked - H2")
// }

// btn2.addEventListener("click", handler2);

// btn2.addEventListener("click", (evt) => {
//     console.log("button2 was clicked - H3")
// })

// btn2.addEventListener("click", (evt) => {
//     console.log("button2 was clicked - H4")
// })

// btn2.removeEventListener("click", handler2);

// Practice Qs

// 1

// let modebtn = document.querySelector("#mode");
// let currMode = "light";
// modebtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black"
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white"
//     }
// console.log(currMode); 
// })

// 2

// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light";

// modebtn.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else {
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// console.log(currMode); 
// })

let circleMode = document.querySelector("#circle");
let currCircleMode = "aquamarine";

circleMode.addEventListener("dblclick", () => {
    if (currCircleMode === "aquamarine") {
        currCircleMode = "aqua";
        document.querySelector("#circle").style.backgroundColor = "aqua"
    } else {
        currCircleMode = "aqua"  
        document.querySelector("#circle").style.backgroundColor = "aquamarine"
    }
   console.log(circleMode); 
})
