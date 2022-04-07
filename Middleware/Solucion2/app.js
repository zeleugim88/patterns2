const num = require('./num.json')
const Middlewares = require('./middleware.js')

const Math = require('./Math.js');
const math = new Math();

const md = new Middlewares();

md.use((next) => { 
    console.log(`Middleware1: Square of ${num.x} is ${num.x**2}`); 
    console.log(`Middleware1: Square of ${num.y} is ${num.y**2}`); 
    next()
});

md.use((next) => {
    console.log(`Middleware2: Cube of ${num.x} is ${num.x**3}`);
    console.log(`Middleware2: Cube of ${num.y} is ${num.y**3}`);
    next()
});

md.use((next) => {
    console.log(`Middleware3: ${(num.x/num.y).toFixed(2)} is the result of dividing ${num.x} by ${num.y}`);
    next()
});

md.get(math.sum); 
md.get(math.subs);
md.get(math.mult); 
