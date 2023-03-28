/*
Closure : inner function has access to the variables of the outer function
even after the outer function has finished its execution
*/
function outerFunction(outerVariable) {
  return function inneFunction(innerVariable) {
    console.log("Outer Variable " + outerVariable);
    console.log("Inner Variable " + innerVariable);
  };
}

const myfunc = outerFunction("outside"); //outerfunction returns the inner function
myfunc("Inside"); //This will pass to the inner function
