function nonMutatingPush(original, newItem) {
    // Only change code below this line
    let newArry = original.concat(newItem);
    return newArry;
    // Only change code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);