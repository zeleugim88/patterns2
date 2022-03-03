const data = require('./data.json')
const {Math1, Math2} = require('./math.js')
const Middleware = require('./middleware.js')

//console.log(Math1.mult(data.a, data.b))
const app = new Middleware(); 

console.log(`JSON original values :  ${data.a}, ${data.b}`);