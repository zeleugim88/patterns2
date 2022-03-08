const data = require('./data.json')
const {Math1, Math2} = require('./math.js')
const Middleware = require('./middlewareC.js')

console.log(`JSON original values :  ${data.a}, ${data.b}`);

Middleware.use((next) => {
    console.log("jitu")
})
/* Middleware.use(Math2.cube(next))
Middleware.use(Math2.div(next)) */

/* app.use((next) => {
    console.log((funciones.suma(num1,num2))**2)
    next()
  }) */

/* mW.use(Math2.square)
mW.use(Math2.cube)
mW.use(Math2.div)
mW.get(Math1.sum);
mW.get(Math1.subs);
mW.get(Math1.mult); */
