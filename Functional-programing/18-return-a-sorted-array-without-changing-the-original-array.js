var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
const sorted = [...arr]
  .sort((a,b) => a === b ? 0 : a > b ? 1 : -1 );
  
return sorted;

  // Only change code above this line
}
nonMutatingSort(globalArray);
console.log(globalArray)