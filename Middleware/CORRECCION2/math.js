class Math1 {
    add({x, y}) { console.log(`5) After ALL middlewares - SUM of ${x} and ${y} : ${x + y}`)};
    subtract({x, y}) { console.log(`5) After ALL middlewares - SUBSTRACTION of ${x} and ${y} : ${x - y}`)}
    multiply({x, y}) { console.log(`5) After ALL middlewares - MULTIPLICATION of ${x} and ${y} : ${x * y}`)}
}

class Math2 {
    static square(req, next) {
        console.log(`1) Original numbers: ${req.x} and ${req.y}`)
        req.x = req.x ** 2;
        req.y = req.y ** 2;
        console.log(`2) After Middleware Square: ${req.x} and ${req.y}`)
        next();
    }

    static cube(req, next) {
            req.x = req.x ** 3;
            req.y = req.y ** 3;
            console.log(`3) After Middleware Cube: ${req.x} and ${req.y}`)
        next()
    }

    static div(req, next) {
            req.x = Math.round(req.x / 2);
            req.y = Math.round(req.y / 2);
            console.log(`4) After Middleware Division by 2: ${req.x} and ${req.y}`)
        next() 
    }
}

module.exports = {Math1, Math2};