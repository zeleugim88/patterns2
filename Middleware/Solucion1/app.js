const num = require('./num.json')

const Middlewares = require('./middleware.js')

const {Math1, Math2} = require('./Math.js');

const md = new Middlewares(Math1);

md.use([Math2.square, Math2.cube, Math2.div]) 
md.get(Math1.sum, num);
md.get(Math1.subs, );
md.get(Math1.mult); 
