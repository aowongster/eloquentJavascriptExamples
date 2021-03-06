function arrayToList ( arr ) {
  var finalList = {};
  var nextList = finalList;

  for (var i = 0; i < arr.length; i++) {
    nextList.value = arr[i];

    if(i === arr.length -1){
      nextList.rest = null;
    }
    else {
      nextList.rest = {};
    }

    nextList = nextList.rest;
  }

  return finalList;

}
// try adding objects in reverse
function arrayToList2( arr ) {
  var tempList;

  for ( var i = arr.length-1; i>=0; i--) {
    if(i === arr.length-1) {
      tempList = {value: arr[i], rest: null};
    }
    else {
      tempList = {value: arr[i], rest: tempList};
    }
  }

  return tempList;
}

function listToArray ( list ) {
  var arr = [];
  for(var node = list; node; node = node.rest){
    arr.push(node.value);
  }

  return arr;
}



function prepend (ele, list) {
  return {value: ele, rest: list};
}

// cheating
function nth2 (list, num ) {
  return listToArray( list )[num];
}

// try recursive function
function nth (list, num) {
  if (num === 0) {
    return list.value;
  }
  return nth( list.rest, num -1)
}
