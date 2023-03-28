//The Constructor (Part 1)
// Define an object
// Accept parameters
class Bicycle {
    constructor(brand) {
        this.brand = brand;
    }
    // Function Prototype (Part 2)
    // Add functionality and extend objects
    goForward(percent) {
        percent = ' Bicycle Moving forward at ' + percent + ' percent speed!';
        return percent;
    }
}


// Calling Prototype based code
// Resembles traditional OOP styles
// 'New Up' instances, then call methods on that instance
var bike = new Bicycle('ProdecoTech');
var speed = bike.goForward(100);
console.log(speed);
console.log(bike);