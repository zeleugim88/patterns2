const data = require('./data.json')

class Math1 {
    static sum(a, b) { `Sum of ${a} and ${b} is ${a+b}`};
    static subs(a, b) { `Substraction of ${a} and ${b} is ${a - b}`  }
    static mult(a, b) { `Multiplication of ${a} and ${b} is ${a * b }` }
}


//middleware
class Math2 {
    square (a,b,next) {
        console.log(`Square of ${a} is ${a**2}`);
        console.log(`Square of ${b} is ${b**2}`);
        //next();
    }
    cube (a,b,next) {
        console.log(`Cube of ${a} is ${a**3}`);
        console.log(`Cube of ${b} is ${b**3}`);
        //next();
    }
    div (a,b,next) {
        console.log(`${a/b} is the result of dividing ${a} by ${b}`);
        //next();
    }
}

module.exports = {Math1, Math2};

