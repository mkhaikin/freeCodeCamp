// Note: dot-notation will cause errors in this challenge.
// [square-bracket] notation must be used to call a variable property name.

function countOnline(usersObj) {
  // Only change code below this line
  let numOnline = 0;
  for (let name in usersObj) {
    if (usersObj[name].online === true) {
      numOnline++;
    }
  }
  return numOnline;
  // Only change code above this line
}
