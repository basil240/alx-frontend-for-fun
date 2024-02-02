// Importing the Currency class from 3-currency.js
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._setAmount(amount);
    this._setCurrency(currency);
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  _setAmount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new TypeError('Amount must be a number');
    }
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  _setCurrency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError('Currency must be an instance of Currency class');
    }
  }

  // Method to display full price information
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price based on conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    } else {
      throw new TypeError('Amount and conversionRate must be numbers');
    }
  }
}