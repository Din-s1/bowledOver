function Bowling() {
  this.rollHistory = [];
  this.frame = 1;
  this.rollsThisFrame = 0;
  this.pinsSet = 10;
};

Bowling.prototype.getFrame = function () {
  return this.frame;
};

Bowling.prototype.nextFrame = function () {
  this.rollsThisFrame = 0;
  this.pinsSet = 10;
  this.strikeThisFrame = false;
  if (this.frame < 11) {
    this.frame += 1;
  } 
  else {
    this.frame = 11;
  }
};

Bowling.prototype.isFrameComplete = function () {
  if (this.rollsThisFrame === 2 || (this.pinsSet === 0)) {
    this.nextFrame();
  } else {
    return false;
  }
};

Bowling.prototype.roll = function (pins) {
  if (pins > this.pinsSet) {
    throw new TypeError('Please enter a valid number of pins');
  } else {
    this.rollsThisFrame += 1;
    this.rollHistory.push(pins);
    this.pinsSet -= pins;
    this.isFrameComplete();
  }
};
