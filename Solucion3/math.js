const data = require('./data.json')
const a = data.a;
const b = data.b;

class Math1 {
    static sum(a, b) { `Sum of ${a} and ${b} is ${a+b}`};
    static subs(a, b) { `Substraction of ${a} and ${b} is ${a - b}`  }
    static mult(a, b) { `Multiplication of ${a} and ${b} is ${a * b }` }
}

//middleware
class Math2 {
    static square (next) {
        console.log(`Square of ${a} is ${a**2}`);
        console.log(`Square of ${b} is ${b**2}`);
        next();
    }
    static cube (next) {
        console.log(`Cube of ${a} is ${a**3}`);
        console.log(`Cube of ${b} is ${b**3}`);
        next();
    }
    static div (next) {
        console.log(`${(a/b)} is the result of dividing ${a} by ${b}`);
        next();
    }
}

module.exports = {Math1, Math2};
Math2.square()

