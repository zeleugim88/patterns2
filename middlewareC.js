
class Middleware {
    constructor() {
        //1 ) middleware array
        this.middlewares = []
    }

    //2) function to add new middleware to array
    use = fn => this.middlewares.push(fn);

    //3) function to run middleware from star to end recursively
    runMiddleware = i => { 
        const count = this.middlewares.length;
        console.log("longitud middleware:" + count)
        if (i < count)
        this.middlewares[i].call(null, () => runMiddleware(i+1))
    }

    //4) get method to call middleware
    get = () => {
        this.runMiddleware(0)
      }
    
}

module.exports = Middleware;



