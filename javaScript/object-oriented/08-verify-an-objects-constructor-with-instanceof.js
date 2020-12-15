  
/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Add your code below this line
  let myHouse=new House(4);
  
  console.log(myHouse instanceof House);