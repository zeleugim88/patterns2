//- El middleware debe aplicarse sobre la clase que guarda las funciones, de modo que se las coma 
//y las "extienda" para poder llamarlas como md.suma() en lugar de hacer md.get(math.suma)

const num = require('./num.json')
const Middlewares = require('./middleware.js')

const {Math1, Math2} = require('./Math.js');

const md = new Middlewares();

md.use([Math2.square, Math2.cube, Math2.div])

//CORRECCIÓ
md.suma();
md.resta();
md.mult(); 

/* md.get(Math1.sum);
md.get(Math1.subs);
md.get(Math1.mult);  */
