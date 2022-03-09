const data = require('./data.json')
const {Math1, Math2} = require('./math.js')
const Middleware = require('./middlewareC.js')

console.log(`JSON original values :  ${data.a}, ${data.b}`);

const mW = new Middleware();


//intentar que los middleware pasen los parámetros a la función siguiente para que el valor se vaya modificando sobre la marcha


