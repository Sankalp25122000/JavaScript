// console.log("hello");
// const div = document.querySelector("div");
// console.log(div);
// const h1 = document.querySelector("h1");
// console.log(h1);
// const h2 = document.querySelector("h2");
// console.log(h2);
// const p = document.querySelector("p");
// console.log(p);
// const p1 = document.querySelector("#para2");
// console.log(p1);
// p1.innerHTML = "new para2";
// let players = ["Sachin", "Saurav", "Virat", "KLRahul"];

// html = ``;
// players.forEach((player) => {
//    html += `<p>${player}</p>`;
// });

// div.innerHTML+=html;
//to find all tag of p
// const paras = document.querySelectorAll("p");

// paras.forEach((para)=>{
//     console.log(para.innerText);
// });

//to find all tag references with class = "test"
// const tags = document.querySelectorAll(".test");
// console.log(tags);
// tags.forEach((tag)=>{
//     console.log(tag.innerText);
// });

// //This will print the first div's para class name
// const tags = document.querySelector(".error");
// console.log(tags);

// //and this will give the second div mentioned in index.html class name
// const tags1 = document.querySelector("div.error");
// console.log(tags1);

// document.getElementById("para2");
// console.log(para2);

// //It will show all tags with class name test
// const testTags = document.getElementsByClassName("test");
// console.log(testTags);

// //Accesing elements of HTMLCollection
// Array.from(testTags).forEach((tag) => {
//   console.log(tag.innerText);
// });

// Array.from(testTags).forEach((tag) => {
// tag.innerText += " Demo";
// });

// //Getting element by tag name
// const tagName = document.getElementsByTagName("p");
// console.log(tagName);

// //get attribute and set attribute
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href","https://facebook.com");
// link.innerText = "Facebook";

// //Adding class name for para2
// const idRef = document.querySelector("#para2");
// para2.setAttribute("class","Success");

// //Changing name of id of para2
// idRef.setAttribute("id","para22");

// //getting reference of tag by copying tag selector Elements(tab): tag(right,click) -> copy selector
// const idRef1 = document.querySelector("body > div:nth-child(1) > p.error");
// console.log(idRef1);
// para2.setAttribute("class","Success");

// //Will override already existed class name
// const ref = document.querySelector("h1");
// ref.setAttribute("class","test1");

//won't override existing class name and new name will be added 
// const head1 = document.querySelector("h1");
// console.log(head1);

// //To add and delete class names
// head1.classList.add("test2");   
// head1.classList.remove("test");


// //Iterates all p tags and add class name according to the content
// const paras = document.querySelectorAll("p");
// paras.forEach(p =>{
//     if(p.innerText.includes("success")){
//         p.classList.add("success");
//     }
//     if(p.innerText.includes("error")){
//         p.classList.add("error");
//     }
// })

// const div = document.querySelector("div.error");//div with class name error

// //toggle helps to add and remove operation 
// div.classList.toggle("error");//removes
// div.classList.toggle("error");//adds
// div.classList.toggle("error");//removes

// const div = document.querySelector("div");
// console.log(div.children);  //it will give inner elements in div tag
// //Access child p tags from parent div
// Array.from(div.children).forEach(x =>{
//    if(x.tagName == "P"){
//     x.innerText += " para";
//    }
// })  

// //Access child p tag from parent div by childNode
// div.childNodes.forEach(child =>{
//     if(child.nodeName == 'P'){
//         child.innerText += " hello";
//     }
// })
   
// //it access the parent element from child element
// const h2 = document.querySelector("h2");
// console.log(h2.parentElement);

// //to print sibling
// console.log(h2.nextElementSibling);
// console.log(h2.previousElementSibling);
//console.log(h2.nextElementSibling.nextElementSibling);
//console.log(h2.previousElementSibling.previousElementSibling.previousElementSibling);















