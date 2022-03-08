
class Middleware {
    constructor() {
        //1 ) middleware array
        this.middlewares = []
    }

    //2) function to add new middleware to array
    static use = fn => this.middlewares.push(fn);

    //3) function to run middleware from star to end recursively
    static runMiddleware = i => { 
        const count = this.middlewares.length;
        if (i < count)
        this.middlewares[i].call(null, () => runMiddleware(i+1))
    }

    //4) get method to call middleware
    static get = () => {
        runMiddlewares(0)
      }
    
}

module.exports = Middleware;
