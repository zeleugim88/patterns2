//- El middleware debe aplicarse sobre la clase que guarda las funciones, de modo que se las coma 
//y las "extienda" para poder llamarlas como md.suma() en lugar de hacer md.get(math.suma)
const { Math1 }  = require('./Math.js');
class Middleware extends Math1{

    constructor(){
    super();
    //1 ) middleware array
    this.middlewares = new Array();
    }
    //2) method to add new middleware to array
    use = (x) => this.middlewares = [...x]

    //3) function to run middleware from star to end recursively
    runMiddleware = (i) => this.middlewares.length > i? this.middlewares[i](()=> this.runMiddleware(i+1)):0
    
    //4) get method to call middleware and function
    //CORRECCIÓ
    suma = () => {
        this.runMiddleware(0);
        super.sum()
      }

    resta = () => {
        this.runMiddleware(0);
        super.subs()
    }

    mult = () => {
        this.runMiddleware(0);
        super.mult()
    }

     /* get = (fn) =>{
         this.runMiddleware(0)
         fn.call()
     } */
 }
 
 module.exports = Middleware;