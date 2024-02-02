// Importing the Building class from 5-building.js
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Calling the constructor of the parent class
    this._setFloors(floors);
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  _setFloors(newFloors) {
    if (typeof newFloors === 'number') {
      this._floors = newFloors;
    } else {
      throw new TypeError('Floors must be a number');
    }
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}