const items = require('./items.json')
const currencies = require('./currency_conversions.json')
const decorate = require('./decorator.js')


//Original prices
console.log("<<<<<<<<<<<<ORIGINAL ITEMS WITH LOCAL CURRENCY>>>>>>>>>>>")
for (let i = 0; i < items.length; i++) {
    console.log(items[i])
}

//Prices in Euros after decorating
console.log("<<<<<<<<<<<ITEMS WITH PRICES IN EUROS>>>>>>>>>>>>>><")
for (let i = 0; i < items.length; i++) {
    decorate(items[i],currencies)
}




