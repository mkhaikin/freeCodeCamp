// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];

  this.forEach(elem => {
    if(callback(elem)) {
      newArray.push(elem)
    }
  })
  // Only change code above this line
  console.log(newArray);
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});