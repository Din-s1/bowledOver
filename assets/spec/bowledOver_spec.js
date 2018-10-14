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

 describe('initially', function() {
   it('frame: 1', function() {
     expect(bowling.getFrame()).toEqual(1);
   });
 });
});