function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

function Tiger() {
  this.energy = 50;
  this.dir = 'n';
}
Tiger.prototype = Object.create(SmartPlantEater.prototype);
Tiger.prototype.act = function(context) {
  var space = context.find(" ");
  if (this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  var herbivore = context.find("O");
  if (herbivore)
    return {type: "eat", direction: herbivore};
  if (space)
      var start = this.dir;
      var view = context;
      if (view.look(dirPlus(this.dir, -3)) != " ")
        start = this.dir = dirPlus(this.dir, -2);
      while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, -1);
        if (this.dir == start) break;
      }
      return {type: "move", direction: this.dir};
};
