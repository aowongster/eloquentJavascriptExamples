// output alternating chess board
var size = 8;
var grid = '';
var row = '';
var square = '# ';

for ( var j = 0; j < size; j++ ){
  row += square;
}
for ( var i = 0; i < size; i++ ) {
  if ( i % 2 )  {
    grid += ' ';
  }
  grid += row + '\n';
}

console.log(grid);
