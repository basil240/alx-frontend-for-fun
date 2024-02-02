export default class Building {
    constructor(sqft) {
      this._setSqft(sqft);
    }
  
    // Getter for sqft
    get sqft() {
      return this._sqft;
    }
  
    _setSqft(newSqft) {
      if (typeof newSqft === 'number') {
        this._sqft = newSqft;
      } else {
        throw new TypeError('Sqft must be a number');
      }
    }
  
    // Abstract method to be implemented by subclasses
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }