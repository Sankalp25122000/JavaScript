// //Asynchronus
// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(()=>{
//     console.log("Callback function is called..");
// },2000);

// console.log(4);
// console.log(5);
// console.log(6);

//XHR XMLHttpRequest
//makes request to get data from api endpoints
/* readyState
0 : Unsent
1 : Open
2 : Received Headers
3 : Loading
4 : Complete
*/

const getTodos = function (url) {
  const request = new XMLHttpRequest();
 
  // if wrong url is given then following code is usable to throw an error or show output
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      /* 200 is predefined as status i.e = success of each */
      console.log(request.responseText);
    } else if (request.readyState == 4) {
      console.log("Could not fetch data");
    }
  });
  //responseText helps to print output in console rather than in a network tab
  request.open("GET",url);
  request.send();
};

getTodos("https://jsonplaceholder.typicode.com/todos");
