export default class HolbertonClass {
    constructor(size, location) {
      this._setSize(size);
      this._setLocation(location);
    }
  
    // Getter and setter for size
    get size() {
      return this._size;
    }
  
    _setSize(newSize) {
      if (typeof newSize === 'number') {
        this._size = newSize;
      } else {
        throw new TypeError('Size must be a number');
      }
    }
  
    // Getter and setter for location
    get location() {
      return this._location;
    }
  
    _setLocation(newLocation) {
      if (typeof newLocation === 'string') {
        this._location = newLocation;
      } else {
        throw new TypeError('Location must be a string');
      }
    }
  
    // Casting to a Number returns the size
    valueOf() {
      return this._size;
    }
  
    // Casting to a String returns the location
    toString() {
      return this._location;
    }
  }