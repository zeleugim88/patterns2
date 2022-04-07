//El decorator ahora mismo no decora los objetos, solo mustra el resultado por consola. 
//Tiene que funcionar de manera que lo ejecutes sobre el objeto y a partir de ahi el objeto 
//tenga las propiedades añadidas (y despues ya haces console.log() de eso)

const items = require('./items.json')
const currencies = require('./currency_conversions.json')
const {Item, ItemDecorator} = require('./decorator.js')

//Original prices 
console.log("<<<<<<<<<<<<ORIGINAL ITEMS WITH LOCAL CURRENCY>>>>>>>>>>>")
for (let i = 0; i < items.length; i++) {
    console.log(items[i])
}

//Prices in Euros after decorating
console.log("<<<<<<<<<<<ITEMS WITH PRICES IN EUROS>>>>>>>>>>>>>><")
for (let i = 0; i < items.length; i++) {
  const item = new Item(items[i].name, items[i].price, items[i].currency);
  const decoratedItem = new ItemDecorator(item, currencies); 
  console.log(`The item ${item.name} costs ${item.currency} ${item.price} or EUR ${(decoratedItem.getPriceEUR())}`)
}




