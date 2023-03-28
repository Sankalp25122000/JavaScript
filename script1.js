// alert("Hello World");
// console.log("Sankalp");
//js is an interpreted language not a compile language

//variable in js
// let value = 20.5; //javascript is loosely type.
// console.log(typeof value);
// value = "Sankalp";
// console.log(typeof value);
// // var age = 23
// // console.log(age);
// const age = 22;
// console.log(age);

//Datatypes in JS
//1.number
//2.string
//3.boolean
//4.Null
//5.undefined
//6.object

//String

// let fname = "Sankalp";
// let lname = "Gaonkar";

// let fullname = fname + " " + lname;
// console.log(fullname.length);

// console.log(fname[0]); //string behaves here like array
// console.log(fname.toLowerCase());
// console.log(fname.toUpperCase());

// let email = "sank@gmail.com";

// console.log(email.substring(email.indexOf("@") + 1));

// console.log(email.substring(3, 5));

// console.log(email.slice(-8, -1));

// email = email.replace("sank", "sam");
// console.log(email);

//template string

// const title = "Programming basics";
// const author = "Amogh Biniwale";
// const likes = 300;

// const strResult = title + " by " + author + " has " + likes +" likes";
// console.log(strResult);

// //by using templace string
//  const authorstr = `${title} by ${author} has ${likes} likes`;  //back ticks
// console.log(authorstr);

//templace string to create HTML content

// let html = `
//          <h1>Title page</h1>
//          <h2>${title}</h2>
//          <p>${author}</p>
//          <p>${likes},</p>
//          `;
// console.log(html);

//undefined and null

// let highscore;

// console.log(highscore+100);  //undefined //Nan = Not a Number

// let value1 = null
// console.log(value1);

// let players = ["Sachin", "Saurav", "Virat", "KLRahul"];
// console.log(players.length);
// console.log(players.indexOf("Virat")); //if not present it will prinnt -1
// players.push("Dravid"); //push at last
// console.log(players);

// players.pop(); //removes last element
// console.log(players);

// console.log(players.includes("Virat"));

//loose vs strict comparision

// let age1 = 30;
// let score = "30";
// console.log(typeof age1);
// console.log(typeof score);
// console.log(age1 == 30);

// console.log(age1 == score); // loose comparision in which type is ignored
// console.log(age1 == score);

//Type coversion

// let score = "100";
// let test = Number(score);
// console.log(test);

// let result = Boolean("Sankalp");
// console.log(result);

// //functions
// greet("San");
// function greet(user) {
//   console.log("Hello " + user);
// }

// console.log("Addition is = " + addNumber(10, 20));
// function addNumber(a, b) {
//   // console.log("Addition = " + (a + b));
//   return a + b;
// }

// //function expression

// const greetings = function () {
//   console.log("Good Morning all..");
// };
// greetings(); //we can't call this before initialization of greeting

// //function hoisting

// //functions are hoisted at the top of the files where the function expression are not
// //hence function can be called before they are declared

// //Default parameters

// const speak = function(name = "Sameer",time="morining"){
//     console.log(name+" says good "+time);
// }
// speak("Sankalp");//value will get override
// const circleArea = (radius) => 3.14 * radius * radius;

// console.log(circleArea(10));

// const speak1 = {name1 = "Jethalal",time="morning"}=> console.log(name1+" says good "+time);
// speak1();

// const bill =(product,tax)=>{
//     let total = 0;
//     for(let i= 0; i<product.length;i++){
//           total +=product[i]+product[i]*tax;
//     }
//     return total;
// }
// console.log(bill([10,20,30,40],0.1));

//callback method
//passing a method as an argument

// const myFunction = (callBackFunc) => {
//   console.log("Inside myfunction..");
//   callBackFunc(50);
// };

// myFunction((value) => {
//   console.log("Callback function callled..");
//   console.log(value);
// });

// //another example
// const testfunc = function (callbackfunc) {
//   callbackfunc();
// };

// testfunc(function () {
//   console.log("Hello callback..");
// });

// // const testVal = function(val){
// //     console.log(val);
// // }
// // testVal(20);

//callback function using foreach
// let players = ["Sachin", "Saurav", "Virat", "KLRahul"];

// players.forEach((player, index) => {
//   console.log(player, index);
// });

//to show on page

// const ul = document.querySelector("ul");

// html = ``;
// players.forEach((player) => {
//   html += `<li>${player}</li>`;
// });

// ul.innerHTML = html;

// //Objects literals
// let user ={
//     name : "Sankalp",
//     age : 22,
//     email : "san@gmail.com",
//     blogs : ['JS in 2 hours','Java in 30 mins','HTML in 15 min']
// };
// // .notation to access object members
// console.log(user.blogs[2]);
// //Sqaure bracket notation to acces object members
// console.log(user['blogs'][1]);

let user = {
  name: "Sameer",
  age: 22,
  email: "sam@gmail.com",
//   blogs: ["JS in 7 days", "HTMl basic for beginers"],
   blogs : [
    {
        title : "Java in 2 hours",
        likes : 1000
    },
    {
        title : "HTML in 1 hour",
        likes : 400
    },
    {
        title : "C++ in 4 hours",
        likes : 2000
    },
    {
        title : "Sharemarket in 2 hours",
        likes : 10000
    }
],

  login: function () {
    console.log(this.name + " logged in ");
  },
  logout: function () {
    console.log(this.name + " logged out");
  },
  logBlogs:function(){
    this.blogs.forEach(blog =>console.log(blog.title+" "+blog.likes+" Likes"));
  }
};

user.login();
user.logout();
user.logBlogs();

//Array of objects


