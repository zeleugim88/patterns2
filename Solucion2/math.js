const num = require('./num.json')

class Math {

    sum() {console.log(`Sum of ${num.x} and ${num.y} is ${num.x + num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)};
    subs() { console.log(`Substraction of ${num.x} and ${num.y} is ${num.x - num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)  }
    mult() { console.log(`Multiplication of ${num.x} and ${num.y} is ${num.x * num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`) }
}  

module.exports = Math

/* const sum = console.log(`Sum of ${num.x} and ${num.y} is ${num.x + num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
const subs = console.log(`Substraction of ${num.x} and ${num.y} is ${num.x - num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
const mult = console.log(`Multiplication of ${num.x} and ${num.y} is ${num.x * num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)

module.exports = {sum, subs, mult}  */

