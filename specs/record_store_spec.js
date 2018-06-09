const assert = require('assert');
const Record = require('../record.js');
const Store = require('../store.js');

describe("Record Store", function(){

  beforeEach(function(){
    store = new Store("RPM Records", "Southend-on-Sea", 1000);
    record1 = new Record("Bonobo", "Black Sands", "Electro", 10);
    record2 = new Record("Dire Straits", "Making Movies", "Rock", 5);
    record3 = new Record("Kraftwerk", "AutoBahn", "Classical", 11);
    record4 = new Record("Glass Animals", "How To Be A Human Being", "Indie", 15);
    store.inventory.push(record4);
    store.inventory.push(record1);
    store.inventory.push(record2);
    store.inventory.push(record3);
  }) //end of beforeEach

  it("Store should have 4 records in it", function(){
    assert.strictEqual(store.inventory.length, 4);
  })

  it("should print out all the properties of the record as a string", function(){
    assert.strictEqual(record1.printInfo(), "Bonobo, Black Sands, Electro, 10");
  })



}) // end of describe;
