const Middleware = require("./middleware");
const {Math1, Math2} = require("./math");
const db = require("./db.json")

const calculator = new Math1();
const mW = new Middleware(calculator);

mW.use([Math2.square, Math2.cube, Math2.div]) 

mW.add(db[0]);
mW.subtract(db[1]);
mW.multiply(db[2]);