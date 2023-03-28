//Validation Regular expression
function validate() {
  //validatePassword();
  var user = document.getElementById("e").value;
  var user2 = document.getElementById("e");
  const confPass = document.querySelector("#p1");
  const pass = document.querySelector("#p").innerHTML;
  const pass2 = document.querySelector("#p1").innerHTML;
  document.addEventListener('click', validatePassword)
 
 
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (re.test(user)) {
    alert("Done");
    return true;
  } else {
    user2.style.border = "red solid 3px";
    return false;
  }
  

  
 
  
  
}

function validatePassword(){
  const confPass = document.querySelector("#p1");
  const pass = document.querySelector("#p").innerHTML;
  const pass2 = document.querySelector("#p1").innerHTML;
  if(pass== pass2){
    return true;
  }
  else{
    alert("Enter proper password")
    confPass.style.border = "red solid 3px"
    return false;
   
  }
}

// const button = document.querySelector("butt");
// button.addEventListener('onclick',()=>{
//   if(pass == pass2){
//     return true;
//   }
//   else{
//     confPass.style.border = "red solid 3px"
//   }
// })
