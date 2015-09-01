function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a,b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure)  {
      //recursive try again watch out for blown up stack
      return reliableMultiply(a, b);
    } else {
      throw e;
    }
  }
}