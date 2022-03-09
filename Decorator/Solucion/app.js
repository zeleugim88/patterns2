const items = require('./items.json')
const decorate = require('./decorator.js')

for (let i = 0; i < items.length; i++) {
    decorate(items[i])
}




