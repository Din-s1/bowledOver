describe('Bowling', function() {
  
  let bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("New score sheet", function() {
    it('Creates an empty score sheet', function() {
      expect(bowling).toEqual(bowling);
    });
  });

  describe('Begins with', function() {
    it('frame: 1', function() {
      expect(bowling.getFrame()).toEqual(1);
    });
  });

  describe('nextFrame', function() {
    it('Increments frame', function() {
      bowling.nextFrame();
      expect(bowling.getFrame()).toEqual(2);
    });
    it('Resets the pins to 10', function() {
      bowling.nextFrame();
      expect(bowling.pinsSet).toEqual(10);
    });
  });

  describe('isFrameComplete', function() {
    it('Moves to next frame if rolled twice', function() {
      bowling.roll(2), bowling.roll(0);
      expect(bowling.getFrame()).toEqual(2);
    });

    it('Moves to next frame when strike rolled', function() {
      bowling.roll(10);
      expect(bowling.getFrame()).toEqual(2);
    });
  });

});