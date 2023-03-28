// function getNumberFact(number) {
//     fetch(`http://numbersapi.com/${number}`)
//       .then(response => response.text())
//       .then(data => {
//         console.log(data);
       
//       })
//       .catch(error => console.error(error));
//   }
  
  // example usage
  //getNumberFact(23);

  const numberFunc = async(input) =>{
    const response = await fetch("http://numberapi.com/"+input);
    const data = response.text();
    return data;
  };

  const button = document.querySelector("button");
  const input = document.querySelector("input");

  button.addEventListener('click',(e)=>{
    if(input.value != ""){
        const data = null;
        numberFunc(input.value).then(data =>{
           const div = document.querySelector("#tasks");
           div.innerHTML = data;
           const info = data;
           const div2 = document.querySelector("#tasks2");
           
            storePrevious(div)
          
          
          //  console.log(storeInLocalStorage(data));
        //    localStorage.setItem("info",info)
        //    localStorage.getItem("info")
        });
    }
  })
  

  function storeInLocalStorage(data){
    localStorage.setItem("data",data);
    localStorage.getItem("info")
  }
  function storePrevious(data){
    const str = data
    return str;
    
  }
  function lastSearchOn(input){
    const d = new Date();
    document.getElementById("#tasks2").innerHTML = d.toString();
  }
  
