export default class Currency {
    constructor(code, name) {
      this._setCode(code);
      this._setName(name);
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
  
    // Method to display full currency information
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }