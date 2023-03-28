console.log("Hello");
//button click 
const ul = document.querySelector("ul");
const addButton = document.querySelector("button");
const input = document.querySelector("input");


addButton.addEventListener("click",e=>{
    if(input.value != ""){
    // const li = document.createElement("li");
    // li.innerText=input.value;
    // ul.appendChild(li);
    // input.value = "";
   document.getElementById("line2").value = document.getElementById("line").value;
}
else {
    alert("Enter player name");
}

})

// //another method
// html =``;
// addButton.addEventListener("click", e =>{
//     html += `<li>Sehwag</li>`
//     ul.innerHTML += html;
//     html = ``;
// });

const list = document.querySelectorAll("li");
// console.log(list);
list.forEach(l=>{
    l.addEventListener('click',e=>{
        console.log(l.innerText);
    })
})

// list.forEach(l=>{
//     l.addEventListener('click',e=>{
//        e.target.remove();
//     })
// })

ul.addEventListener('click',e=>{
    if(e.target.localName==='li')
    e.target.remove();
})

addButton.addEventListener('click',e=>{
    const line = document.getElementById("line");
    console.log(line);

   

})
