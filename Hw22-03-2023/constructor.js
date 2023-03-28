//constructor patterns
class ManufactureProcess {
    constructor(size, color) {
        this.size = size;
        this.color = color;

        this.stitchShirt = function () {
            console.log(`Stitched shirt of ${this.color} color with ${this.size} size`);
        };
    }
}
  
  const machine1 = new ManufactureProcess("XL", "safron");
  const machine2 = new ManufactureProcess("L", "blue");
  
  machine1.stitchShirt(); 
  machine2.stitchShirt();