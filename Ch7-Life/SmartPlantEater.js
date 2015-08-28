// original plant eater
function PlantEater() {
  this.energy = 20;
}
PlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  var plant = context.find("*");
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}
function SmartPlantEater() {
  PlantEater.call(this); // gives planteater 20 energy
  this.dir = "s";
}
SmartPlantEater.prototype = Object.create(PlantEater.prototype);
SmartPlantEater.prototype.act = function(context) {
  var space = context.find(" ");
  var MAXENERGY = 60;
  if (this.energy > MAXENERGY && space) {
    return {type: "reproduce", direction: space};
  }
  // smarter eating strategy
  var plant = context.findAll("*");
  if (plant.length > 1) {
    return {type: "eat", direction: plant[0]};
  }
  // smarter movement strategy from wall flower
  if (space) {
    var start = this.dir;
    var view = context;
    if (view.look(dirPlus(this.dir, -3)) != " ")
      start = this.dir = dirPlus(this.dir, -2);
    while (view.look(this.dir) != " ") {
      this.dir = dirPlus(this.dir, 1);
      if (this.dir == start) break;
    }
    return {type: "move", direction: this.dir};
  }
};