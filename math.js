const data = require('./data.json')

class Math1 {
    static sum(a, b) { return a + b };
    static subs(a, b) { return a - b }
    static mult(a, b) { return a * b }
}


//middleware
class Math2 {
    static square (a,b,next) {
        console.log(`Square of ${a} is ${a**2}`);
        console.log(`Square of ${b} is ${b**2}`);
        next();
    }
    static cube (x,y,next) {
        console.log(`Cube of ${a} is ${a**3}`);
        console.log(`Cube of ${b} is ${b**3}`);
        next();
    }
    static div (x,y,next) {
        console.log(`${a/b} is the result of dividing ${a} by ${b}`);
        next();
    }
}

//console.log(Math1.sum(data.a,data.b))
module.exports = {Math1, Math2};
