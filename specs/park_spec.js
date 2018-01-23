const assert = require('assert');
const Park = require('../Park.js');
const Dinosaur = require('../Dinosaur.js');

describe(`Park`, function(){

  let park;
  let dino;

  beforeEach(function(){
    park = new Park();
    dinoA = new Dinosaur("tyrannosaur", 4);
    dinoB = new Dinosaur("triceratops", 3);
    dinoC = new Dinosaur("tyrannosaur", 1);
  })

  it('dino added', function(){
    assert.strictEqual(park.dinosaurs.length, 0);
    park.addDino(dinoA);
    assert.strictEqual(park.dinosaurs.length, 1);
  })

  it('find dinos', function(){
    park.addDino(dinoA);
    park.addDino(dinoB);
    assert.strictEqual( park.findDinosByType("triceratops"), 1);
  })

  it('remove dinos by type', function(){
    park.addDino(dinoB);
    park.addDino(dinoA);
    park.addDino(dinoC);
    assert.strictEqual( park.removeDinoByType("tyrannosaur"), 2);
  })

  it('find dinos with less than Two', function(){
    park.addDino(dinoB);
    park.addDino(dinoA);
    park.addDino(dinoC);
    assert.strictEqual( park.findDinosWithLessThanTwo(), 1);
  })


})
