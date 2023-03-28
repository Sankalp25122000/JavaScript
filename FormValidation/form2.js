const email = document.getElementById("em").value;
const emailVald = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const userName = document.querySelector("#userN").value;
const phoneNumber = document.querySelector("#phone");
const pass = document.getElementById("pass");
const confirmmPass = document.getElementById("conPass");
const phoneNo = document.getElementById("phone").value;

const btn = document.querySelector("button");

btn.addEventListener("click", checkPass);
btn.addEventListener("click", checkEmail);
btn.addEventListener("click", checkName);
btn.addEventListener("click", checkPhone);

function checkEmail() {
  var atposition = email.indexOf("@");
  var dotposition = email.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 5 ||
    dotposition + 3 >= x.length
  ) {
    return true;
  } else {
    alert("Invalid Email id");
    return false;
  }
}
function checkName() {
    var specialChar = /^[A-Za-z0-9 ]+$/
    var isValid = specialChar.test(document.getElementById("userN").value);
    if (!isValid) {
        alert("Contains Special Characters.");
    }
    return isValid;
}
function checkPass() {
  // password
  if (pass.value == confirmmPass.value && pass.length >=8) {
    return true;
  } else {
    alert("password must be same!");
    return false;
  }
}
function checkPhone() {
    var numbers = /^[7-9]+$/
    var isValid = numbers.test(document.getElementById("phone").value);
    if(!isValid){
        alert("Not starting with 7, 8, and 9.");
    }
    else if(phoneNo<=10){
        return isValid;
    }
    return isValid;
  
}
