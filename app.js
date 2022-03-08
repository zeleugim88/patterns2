const data = require('./data.json')
const {Math1, Math2} = require('./math.js')
const Middleware = require('./middlewareC.js')

console.log(`JSON original values :  ${data.a}, ${data.b}`);

const mW = new Middleware();

mW.use((next) => {
  Math2.square(data.a,data.b);
  next()
})

mW.use((next) => {
  Math2.cube(data.a,data.b);
  next()
})

mW.use((next) => {
  Math2.div(data.a,data.b);
  next()
})

/* mW.use(Math2.cube)
mW.use(Math2.div)
console.log(mW.middlewares)

mW.get() */


