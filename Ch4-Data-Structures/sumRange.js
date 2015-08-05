// Your code here. come up with range and sum function

function range(start, stop, step) {
  if (typeof step === 'undefined' || step === 0){
    step = 1;
  }
  var arr = [];

  if( step > 0 ) {
    for( var i = start; i <= stop; i+= step) {
      arr.push(i);
    }
  }
  else {
    for ( var j = start; j >= stop; j += step) {
      arr.push(j);
    }
  }
  return arr;
}

function sum(arr){
  var total = 0;
  for (var num in arr){
    total += arr[num];
  }
  return total;
}
console.log(sum(range(1, 10)));