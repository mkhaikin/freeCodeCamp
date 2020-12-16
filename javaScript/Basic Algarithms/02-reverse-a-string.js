function reverseString(str) {
    let revStr = [];
    let string = str.split('');
    string.forEach( elem =>  revStr.unshift(elem))
    return revStr.join('');
  }
  
  console.log(reverseString("hello"));