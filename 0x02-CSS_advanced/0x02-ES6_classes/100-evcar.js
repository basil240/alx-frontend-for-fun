import Car from './10-car.js';

const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;

    // Initialize a private property for cloning
    this[cloneSymbol] = {
      brand: this._brand,
      motor: this._motor,
      color: this._color,
      range: this._range,
    };
  }

  // Getter for range
  get range() {
    return this._range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    const clone = new Car();
    Object.assign(clone, this[cloneSymbol]);
    return clone;
  }
}