
const Middleware = () => {
    
        const middlewares = []

    //2) function to add new middleware to array
    const use = fn => middlewares.push(fn);

    //3) function to run middleware from star to end recursively
    const runMiddleware = i => { 
        const count = middlewares.length;
        if (i < count)
        this.middlewares[i].call(null, () => runMiddleware(i+1))
    }

    //4) get method to call middleware
    const get = () => {
        runMiddleware(0)
      }

}

module.exports = Middleware

    