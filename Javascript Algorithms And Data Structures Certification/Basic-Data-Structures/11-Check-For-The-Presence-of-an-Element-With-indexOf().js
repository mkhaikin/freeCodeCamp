// Modify the function using indexOf() so that it returns
// true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) < 0 ? false : true;
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
