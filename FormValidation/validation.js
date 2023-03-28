// var reg = /[a-z]/ig;  regular expression creation

// var reg2 = new RegExp(/[a-z]/,"i");  //Another way to create regular expression

const inputs = document.querySelectorAll('input');
const patterns = {
    telephone : /^(0|91)?[6-9][0-9]{9}$/,
    username: /^[a-z\d]{5-12}$/i,
    password: /^[\w@-]{8-20}$/,
    slug:/^[a-z\d-]{8-20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/ //the ? mark here makes the nearest parantheses code optional

};

//Validation function
function validate(field, regex){
// console.log(regex.test(field.value));  // returns true and false value
if(regex.test(field.value)){
    field.className = 'valid';
}
else{
    field.className = 'invalid';
}

}

inputs.forEach((input)=>{
    input.addEventListener('keyup',(e)=>{
    //console.log(e.target.attributes.name.value);
    validate(e.target,patterns[e.target.attributes.name.value])
    });
});