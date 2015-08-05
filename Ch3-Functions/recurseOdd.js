// recurse an even function for positive whole ints
function isEven(x) {
  if ( x < 0 ) {
    return false;
  }
  else if ( x === 0 ) {
    return true;
  }
  else if ( x === 1 ) {
    return false;
  }
  // recurse
  else {
    return isEven( x - 2 );
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??