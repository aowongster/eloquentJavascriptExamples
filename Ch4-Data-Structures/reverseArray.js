// array reversal, inplace and new

function reverseArray(arr) {
  var newArr = [];
  for(var idx in arr){
    newArr.unshift(arr[idx]);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  // swap elements in place
  for (var i=0; i < Math.floor(arr.length/2); i++) {
    var holdIdx = arr.length - 1 - i;

    var front = arr[holdIdx];
    arr[holdIdx] = arr[i];
    arr[i] = front;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]