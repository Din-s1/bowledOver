'use strict';

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
    it('increments frame', function() {
      bowling.nextFrame();
      expect(bowling.getFrame()).toEqual(2);
    });
  });

});