export default class HolbertonCourse {
    constructor(name, length, students) {
      this._setName(name);
      this._setLength(length);
      this._setStudents(students);
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
  
    // Getter and setter for length
    get length() {
      return this._length;
    }
  
    _setLength(newLength) {
      if (typeof newLength === 'number') {
        this._length = newLength;
      } else {
        throw new TypeError('Length must be a number');
      }
    }
  
    // Getter and setter for students
    get students() {
      return this._students;
    }
  
    _setStudents(newStudents) {
      if (Array.isArray(newStudents) && newStudents.every(student => typeof student === 'string')) {
        this._students = newStudents;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }