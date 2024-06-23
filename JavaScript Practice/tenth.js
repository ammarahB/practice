// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const button = document.querySelector("#btn");

// // async-await method

// const getFacts = async () => {
//     console.log("getting data .....");
//     let response = await fetch(URL);
// console.log(response); //JSON format
// let data = await response.json(); 
// console.log(data[0].text); //JS object format
// factPara.innerText = data[2].text
// }

//.then method

// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });
// }

button.addEventListener("click", getFacts);


// const URL = "https://potterapi-fedeperin.vercel.app/en/books";
// const bookPara = document.querySelector("#book");
// const button = document.querySelector("#btn");

// // What is this?

// const books = {
//     method: "POST",
//     mode: "cors",
//     cache: "default",
//   };

// const getBooks = async () => {
//     console.log("getting data .....")
//     let response = await fetch(URL, books);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[1]);
//     bookPara.innerText = data[1].description
// }

// button.addEventListener("click", getBooks);