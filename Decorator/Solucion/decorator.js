const currencies = require('./currency_conversions.json')

class Item {
    constructor(name, price, currency) {
      this.name = name;
      this.price = price;
      this.currency = currency;
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class ItemDecorator {
    constructor(item, currencies) {
      this.item = item;
      this.conversionRates = currencies;
    }
  
    getPriceEUR() {
      const conversionPair = this.item.currency.concat("_EUR");
      const conversionRate = currencies[conversionPair]
      const priceEUR = (this.item.getPrice() * conversionRate).toFixed(2);
      return priceEUR
    }
  }
  
 

//Bucle para instanciar items
 const decorate = ({name, price, currency}) => {

    const item = new Item(name,price,currency);
    const decoratedItem = new ItemDecorator(item);
    console.log(`The item ${item.name} costs ${item.currency} ${item.price} or EUR ${(decoratedItem.getPriceEUR())}`)
}

module.exports = decorate;

