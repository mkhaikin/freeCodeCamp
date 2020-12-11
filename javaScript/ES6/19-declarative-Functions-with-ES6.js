// Only change code below this line
const bicycle = {
    gear: 2,
    //in ES6, drop the word function and colon
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);
  