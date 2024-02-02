export default class Airport {
    constructor(name, code) {
      this._setName(name);
      this._setCode(code);
    }
  
    // Getter and setter for name
    get name() {
      return this._name;
    }
  
    _setName(newName) {
      if (typeof newName === 'string') {
        this._name = newName;
      } else {
        throw new TypeError('Name must be a string');
      }
    }
  
    // Getter and setter for code
    get code() {
      return this._code;
    }
  
    _setCode(newCode) {
      if (typeof newCode === 'string') {
        this._code = newCode;
      } else {
        throw new TypeError('Code must be a string');
      }
    }
  
    // Default string description of the class
    toString() {
      return this._code;
    }
  }