function findLongestWordLength(str) {
    let longest = 0;
    str = str.split(' ');
    // console.log('the array '+ Array.isArray(str))
    str.forEach(word => {
        if (word.length > longest){
        longest = word.length
      }
    })
    return longest;
  }
  
  console.log(findLongestWordLength("he quick brown fox jumped over the lazy dog"));