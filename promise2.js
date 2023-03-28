const getTodos = function (url) {
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();
   
        // if wrong url is given then following code is usable to throw an error or show output
        request.addEventListener("readystatechange", () => {
          if (request.readyState == 4 && request.status == 200) {
            /* 200 is predefined as status i.e = success of each */
            resolve(JSON.parse(request.responseText));
           // console.log(request.responseText);
          } else if (request.readyState == 4) {
           // console.log("Could not fetch data");
           reject("Could not fetch data ")
          }
        });
        //responseText helps to print output in console rather than in a network tab
        request.open("GET",url);
        request.send();
      });
    };
   
  
//const url = "https://jsonplaceholder.typicode.com/comments";
const url = "san.json";
//below code solves the callback hell problem
getTodos(url).then(data=>{
    console.log(data);
    return getTodos(url)
}).then(data=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
