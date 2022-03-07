
class Middleware {
    constructor() {
        this.middlewares = []
    }

    static use(callback) { //add middelware to array
        this.middlewares.push(callback)
    }

    static execute(data, done) { //loop
        this.middlewares.reduceRight((done, next) => () => next(data, done), done)
            (data);
    }

    static run(data) {
        this.execute(data, done => console.log(data));
    }
    
}

module.exports = Middleware;