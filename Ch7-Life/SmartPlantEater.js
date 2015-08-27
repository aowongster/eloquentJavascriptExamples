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

function SmartPlantEater() {
  PlantEater.call(this); // gives planteater 20 energy
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
  // smarter movement strategy
  if (space) {
    return {type: "move", direction: space};
  }
};