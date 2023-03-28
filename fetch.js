//fetch api implements promise

//console.log(fetch("san.json"))

//it fetches url value as a response object
fetch("san.json").then((response)=>{
  return response.json(); //response.json also returns data
}).then((data)=>{      //response data object 
    console.log(data); //this will help to show data from above returned promise
   return fetch("san.json"); ////
}).then(response =>{          //
    return response.json();   //   Chaining 
}).then((data)=>{             //
    console.log(data);      ////
}).catch((err)=>{
    console.log("some error occured... Could not fetch data!!");
})