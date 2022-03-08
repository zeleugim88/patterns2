class Middleware{

    constructor(){
    //1 ) middleware array
    this.middlewares = [];
    }
    //2) method to add new middleware to array
     use = (x) => this.middlewares.push(x)

    //3) function to run middleware from star to end recursively
     runMiddleware = i => {
        if(i < this.middlewares.length)
            //this.middlewares[i].apply(null,[() => this.runMiddleware(i+1)])
            this.middlewares[i].call(null,() => this.runMiddleware(i+1))
     }

     //4) get method to call middleware and function
        get = (fn) => {
            this.runMiddleware(0)
            //fn.call(null)
            fn.apply(null,[]) 
    }
}
module.exports = Middleware; 

