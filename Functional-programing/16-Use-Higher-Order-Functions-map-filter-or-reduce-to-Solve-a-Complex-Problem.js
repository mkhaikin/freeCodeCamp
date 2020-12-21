const squareList = arr => {
    // Only change code below this line
    let positiveInt = arr
      .filter(num => num > 0 && Number.isInteger(num))
      .map(num => num*num)
    return positiveInt;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, , 3, -3.2]);
  console.log(squaredIntegers);