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

  // xit("should print all of the properties of the inventory", function(){
  //   assert.strictEqual(store.showInventory(), "Bonobo, Black Sands, Electro, 10 " )
  // })

  it("should sell a record and increase the balance  by the price of the record", function(){
    store.sell(record4);

    assert.strictEqual(store.balance, 1015);
  })

  it("should calculate the total of the stock", function(){
    assert.strictEqual(store.inventoryValue(), "Total cost of Stock = 41 Balance = 1000");
  })

  // it("should display the balance and value of the inventory"), function(){
  //   // store.calculateFinanace();
  //   assert.strictEqual(store.calculateFinanace(inventoryValue()), "1000 41");
  //   // assert.strictEqual(store.inventoryValue, 41);
  // }



}) // end of describe;
