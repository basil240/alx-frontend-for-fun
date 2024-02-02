const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Initialize a private property for cloning
    this[cloneSymbol] = {
      brand: this._brand,
      motor: this._motor,
      color: this._color,
    };
  }

  // Getter for brand
  get brand() {
    return this._brand;
  }

  // Getter for motor
  get motor() {
    return this._motor;
  }

  // Getter for color
  get color() {
    return this._color;
  }

  // Method to clone the car
  cloneCar() {
    const clone = new Car();
    Object.assign(clone, this[cloneSymbol]);
    return clone;
  }
}
const originalCar = new Car('Toyota', 'V6', 'Blue');
const clonedCar = originalCar.cloneCar();

console.log(originalCar);
console.log(clonedCar);