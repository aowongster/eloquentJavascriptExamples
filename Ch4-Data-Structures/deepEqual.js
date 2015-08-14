function deepEqual(a, b) {
  if (typeof a === 'object'){
    // do object checking
    for(var key in a) {
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  else {
    return a === b;
  }
}