class Middleware {
  constructor(digestedInstance) { // digestedInstance: any instance to copy methods from
    this.digestedInstance = digestedInstance;
    this.middlewares = [];
    this.param = {};

    //Create methods in Middleware (copied from target digested instance)
    const prototype = Object.getPrototypeOf(this.digestedInstance);
    const importedMethods = Object.getOwnPropertyNames(prototype).slice(1)
    importedMethods.forEach(fn => this.createMethod(fn));
  }

  //Method to add middlewares to array
  use = (middleware) => this.middlewares = [...middleware]

  //Method to run middlewares array
  runMW = (i = 0) => this.middlewares.length > i ? this.middlewares[i](this.param, () => this.runMW(i + 1)) : 0
  //does not work=> 
  //runMW = (i = 0) => this.middlewares.length > i ? this.middlewares[i].call(this.param,() => this.runMW(i+1)) : 0
  /* runMW = i => {
    if (i < this.middlewares.length) {
      runMW = (i = 0) => this.middlewares[i].apply(this.param, [() => this.runMW(i + 1)])
    }
  } */


  //Method to create a copy of the incoming method, execute middlewares and finally execute copied method
  createMethod(fn) {
    this[fn] = args => { 
      this.param = args;
      this.runMW();
      return this.digestedInstance[fn].apply(this, [this.param])
    };
  }
}

module.exports = Middleware;