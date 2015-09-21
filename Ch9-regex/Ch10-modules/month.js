(function(exports) {
  var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

  // same as weekday code
  exports.name = function(number) {
    return names[number];
  };

  exports.number = function(name) {
    return names.indexOf(name);
  }

})(this.month = {});  // passes object to interface to bind to global scope

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10