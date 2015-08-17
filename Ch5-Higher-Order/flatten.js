var ancestry = JSON.parse(require('./ancestry.js'));
// flatten array of arrays using reduce and concat
var arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(arr) {
  return arr.reduce(function(prev, curr) {
    return prev.concat(curr);
  });
}
console.log(flatten(arrays));

// mother child age diffs
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// filtering / map invalid mothers
function hasKnownMother(person) {
  return person.mother !== null;
}

var filtered = ancestry.filter(hasKnownMother);
console.log(filtered.length);       // sanity check

var diffs = [];
filtered.forEach(function(person) {
  if(byName[person.mother]) {       // <- mother is not guaranteed in the dataset
    diffs.push(person.born - byName[person.mother].born);
  }
});

console.log(average(diffs));

// Historical Life expectancy
var ancestryCopy = ancestry;
ancestryCopy.forEach(function(person) {
  // figure out their century
  person.century = Math.ceil(person.died / 100);

});

// returns are array of objects grouped by similar properties
function groupBy (prop, arr) {
  var groupObj = {};
  arr.forEach(function(person) {
    if(groupObj.hasOwnProperty(person[prop])) {
      groupObj[person[prop]].push(person);
    }
    else {
      groupObj[person[prop]] = [person];
    }
  });
  return groupObj;
}

var groupCentury = groupBy('century', ancestryCopy);

// parsing group dictionary and taking average age of persons
for(var group in groupCentury) {
  var sum = 0;
  groupCentury[group].forEach(function(person) {
    sum += person.died - person.born;
  });
  console.log(group, sum/groupCentury[group].length);
}

// write every and sum iterators
function every(arr, fn) {
  for(var i=0; i < arr.length; i++) {
    if(!fn(arr[i])) {
      return false;
    }
  }
  return true;
}

function some(arr, fn) {
  for(var i=0; i < arr.length; i++) {
    if(fn(arr[i])) {
      return true;
    }
  }
  return false;
}