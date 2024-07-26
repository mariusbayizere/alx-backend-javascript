import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('amount must able to be number');
    }

    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must  class currency');
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else {
      throw new TypeError('amount must to be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new TypeError('Currency must  class currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (
      !(typeof amount === 'number')
      || !(typeof conversionRate === 'number')
    ) {
      throw new TypeError('convert amount to the Ratio');
    } else {
      return amount * conversionRate;
    }
  }
}
