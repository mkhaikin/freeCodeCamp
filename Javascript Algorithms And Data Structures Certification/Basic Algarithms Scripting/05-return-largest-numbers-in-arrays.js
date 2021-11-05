function largestOfFour(arr) {
  let largestNums = [];

  for(let i=0;i<arr.length;i++) {
    let largest = arr[i][0];
    for(let x=0;x<arr[i].length;x++) {
      if(arr[i][x] > largest) {
        largest = arr[i][x];
      }
    }
    largestNums.push(largest)
  }
  return largestNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
