// interface over collection of values
// solves example, I dont think it's right

// logFive
function logFive(seq) {
  var end = Math.min(seq.length, 5);
  for(var i=0; i < end; i++){
    console.log(seq[i]);
  }
}

function ArraySeq(arr) {
  return arr;
}

function RangeSeq(from, to) {
  var arr =[];
  for (var i=from; i<to; i++){
    arr.push(i);
  }
  return arr;
}
