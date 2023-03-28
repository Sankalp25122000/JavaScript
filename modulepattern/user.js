/*
Modules in Js : we can create classed and methods and export it,
so than it can be imported and used in other js files
*/

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function printName(user) {
  console.log("User name : " + user.name);
}

function printAge(user) {
  console.log("User age : " + user.age);
}
export default User;
export { printName, printAge };
