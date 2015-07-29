// writes a function to count a certain letter in a string.
// write one for uppercase B's

function countChar(inputStr, searchChar){
  var count = 0;
  for( var i = 0; i < inputStr.length; i++){
    if ( inputStr.charAt(i) === searchChar ){
      count +=  1;
    }
  }
  return count;
}

function countBs(inputStr){
  return countChar(inputStr, 'B');
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4