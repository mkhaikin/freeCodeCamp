function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
    let slicedArr=[];
  
    slicedArr = anim.slice(beginSlice,endSlice)
  
    return slicedArr;
    // Only change code above this line
  }
  var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);