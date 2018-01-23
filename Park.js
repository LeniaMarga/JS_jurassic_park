const Dinosaur = require('./Dinosaur.js');

const Park = function(){
    this.dinosaurs = [];
}


Park.prototype.addDino = function(dino){
      this.dinosaurs.push(dino);
}

Park.prototype.findDinosByType = function(type){
  var sum = 0;
  for (dino of this.dinosaurs){
       if (dino.type == type) {
          sum = (sum + 1);
       }
  }
  return sum;
}

Park.prototype.removeDinoByType = function(type){
 var totalRemoved = [];
 for (dino of this.dinosaurs){
   if (dino.type == type) {
      totalRemoved.push(dino);
  }
}
  return totalRemoved.length;
}


Park.prototype.findDinosWithLessThanTwo = function(){
  var lessThanTwo = [];
  for (dino of this.dinosaurs){
       if (dino.numberOfOfsprings < 2) {
          lessThanTwo.push(dino);
       }
  }
  return lessThanTwo.length;
}

Park.prototype.findAverageOfsprings = function(){
  var sum = 0;
  for (dino of this.dinosaurs){
      sum = (sum + dino.numberOfOfsprings);
  }
  return sum = (sum / this.dinosaurs.length);
}

// Park.prototype.number0fDinosInOneYear = function(){
//    var totalDinos = 0;
//    for (dino of this.dinosaurs){
//
//    }




module.exports = Park;
