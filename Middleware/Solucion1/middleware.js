class Middleware{

    constructor(){
    //1 ) middleware array
    this.middlewares = new Array();
    this.param = {}
    }
    //2) method to add new middleware to array
    use = (x) => this.middlewares = [...x]

    //3) function to run middleware from star to end recursively
    runMiddleware = (i) => this.middlewares.length > i? this.middlewares[i](param, ()=> this.runMiddleware(i+1)):0
    
     //4) get method to call middleware and function
     get = (fn, param) =>{
         this.param = param
         this.runMiddleware(0)
         fn.call()
     }
 }
 
 module.exports = Middleware;