const sumbutton = document.querySelector("#sum");
const colorButton = document.querySelector("#color");
const worker = new Worker("webworker.js");

sumbutton.addEventListener('click',()=>{
    worker.postMessage("test");
});

worker.onmessage = (result)=>{
   alert("Sum is "+result.data)
}

colorButton.addEventListener("click", (e) => {
    if (document.body.style.backgroundColor != "green") {
      document.body.style.backgroundColor = "green";
    } else {
      document.body.style.backgroundColor = "cyan";
    }
  });
  