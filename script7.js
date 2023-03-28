//callback hell?
const getTodos = function (callback, url) {
  const request = new XMLHttpRequest();

  // if wrong url is given then following code is usable to throw an error or show output
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      /* 200 is predefined as status i.e = success of each */
      callback(undefined, JSON.parse(request.responseText));
      // console.log(request.responseText);
    } else if (request.readyState == 4) {
      // console.log("Could not fetch data");
      callback("Could not fetch data ", undefined);
    }
  });
  //responseText helps to print output in console rather than in a network tab
  request.open("GET", url);
  request.send();
};

//const url = "https://jsonplaceholder.typicode.com/comments";
const url = "san.json";
getTodos((err, data) => {
  if (data) {
    console.log(data);
    getTodos((err, data) => {
      if (data) {
        console.log(data);
        getTodos((err, data) => {
          if (data) {
            console.log(data);
          } else {
            console.log(err);
          }
        },url);
      } else {
        console.log(err);
      }
    },url);
  } else {
    console.log(err);
  }
}, url);
