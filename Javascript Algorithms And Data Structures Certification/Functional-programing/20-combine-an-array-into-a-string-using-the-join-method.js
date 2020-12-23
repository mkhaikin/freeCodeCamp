function sentensify(str) {
    // Only change code below this line
  const split = str
    .split(/[^0-9a-zA-Z_]/)
    .join(' ');

  return split
    // Only change code above this line
  }
  sentensify("May-the-force-be-with-you");