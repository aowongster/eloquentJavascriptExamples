// vector constructor
//saves x, y
// two methods, plus and minus that takes a another vector
// getter property on x,y from 0,0

function Vector(x,y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function(addend) {
  return new Vector(this.x + addend.x, this.y + addend.y);
};
Vector.prototype.minus = function(sub) {
  return new Vector(this.x - sub.x, this.y -sub.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt(this.x*this.x + this.y*this.y); }
});