function Bowling() {
  this.rollHistory = [];
  this.frame = 1;
  this.rollsThisFrame = 0;
  this.pinsRemaining = 10;
};

Bowling.prototype.getFrame = function () {
  return this.frame;
};

Bowling.prototype.nextFrame = function () {
  this.rollsThisFrame = 0;
  this.pinsRemaining = 10;
  this.strikeThisFrame = false;
  if (this.frame < 11) {
    this.frame += 1;
  } 
  else {
    this.frame = 11;
  }
};