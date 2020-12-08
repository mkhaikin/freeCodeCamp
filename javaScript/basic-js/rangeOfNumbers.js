function rangeOfNumbers(startNum, endNum) {
    if (endNum == startNum ) {
        console.log(startNum, endNum);
      return [startNum];
    } else {
      var array = rangeOfNumbers(startNum, endNum -1 );
      array.push(endNum);
      console.log(startNum, endNum);
      return array;
    }
  }