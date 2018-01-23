const assert = require('assert');
const Dinosaur = require('../Dinosaur.js');

describe(`Dinosaur`, function(){

  let dino;

  beforeEach(function(){
    dino = new Dinosaur("tyranosaur",3);
  })

  it('dino type', function(){
    // let bottle = new WaterBottle();   we declare it
    assert.strictEqual(dino.type,"tyranosaur");
  })

  it('dino babies', function(){
    // let bottle = new WaterBottle();   we declare it
    assert.strictEqual(dino.numberOfOfsprings, 3);
  })

})
