function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype={
    numLegs: 2,
    eat(){
      console.log("eat method in ES6");
    },
    describe(){
      console.log("describe method in ES6");
    }
  }
  