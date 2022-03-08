const num = require('./num.json')
class Math1 {

    static sum() {console.log(`Sum of ${num.x} and ${num.y} is ${num.x + num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)};
    static subs() { console.log(`Substraction of ${num.x} and ${num.y} is ${num.x - num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)  }
    static mult() { console.log(`Multiplication of ${num.x} and ${num.y} is ${num.x * num.y}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`) }
}  

class Math2 {
    static square = (next) =>{
        console.log(`Middleware1: Square of ${num.x} is ${num.x**2}`); 
        console.log(`Middleware1: Square of ${num.y} is ${num.y**2}`);
        next()
    }
    static cube = (next) =>{
        console.log(`Middleware2: Cube of ${num.x} is ${num.x**3}`);
        console.log(`Middleware2: Cube of ${num.y} is ${num.y**3}`);
        next()
    }
    static div = (next) =>{
        console.log(`Middleware3: ${(num.x/num.y).toFixed(2)} is the result of dividing ${num.x} by ${num.y}`);
        next() 
    }
}

module.exports = {Math1, Math2};