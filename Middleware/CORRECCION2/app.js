//- El middleware debe aplicarse sobre la clase que guarda las funciones, de modo que se las coma 
//y las "extienda" para poder llamarlas como md.suma() en lugar de hacer md.get(math.suma)

const num = require('./num.json')
const Middlewares = require('./middleware.js')

const {Math1, Math2} = require('./Math.js');

const calculadora = new Math1(); 

const md = new Middlewares(calculadora);

md.use(...)

md.use(...)

//MAL => md.use([Math2.square, Math2.cube, Math2.div])

//CORRECCIÓ
console.log(md.suma());
console.log(md.resta());
console.log(md.mult()); 

