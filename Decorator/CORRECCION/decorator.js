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
  //Decorator class is constructed with the object we want to decorate
  constructor(item, currencies) {
    this.item = item;
    this.currencies = currencies;
  }

  getPriceEUR() {
    const conversionPair = this.item.currency.concat("_EUR");
    const conversionRate = this.currencies[conversionPair]
    const priceEUR = (this.item.getPrice() * conversionRate).toFixed(2);
    return priceEUR
  }
}

//Declare decorate() function with 4 parameters, being 3 parameters object properties from items[i]
/* const decorate = ({ name, price, currency }, currencies) => {

  const item = new Item(name, price, currency);
  const decoratedItem = new ItemDecorator(item, currencies); 
  console.log(`The item ${item.name} costs ${item.currency} ${item.price} or EUR ${(decoratedItem.getPriceEUR())}`)
} */

module.exports = {Item, ItemDecorator};


