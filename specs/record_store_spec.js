const assert = require('assert');
const Record = require('../record.js');
const Store = require('../store.js');

describe("Record Store", function(){

  beforeEach(function(){
    store = new Store("RPM Records", "Southend-on-Sea", 1000);
    record1 = new Record("Bonobo", "Black Sands", "Electro", 10);
    record2 = new Record("Bonobo", "Days To Come", "Electro", 10);
    record3 = new Record("Bonobo", "Migration", "Electro", 10);
    record4 = new Record("Dire Straits", "Making Movies", "Rock", 15);
    record5 = new Record("Kraftwerk", "AutoBahn", "Classical", 11);
    record6 = new Record("Glass Animals", "How To Be A Human Being", "Indie", 15);
    store.inventory.push(record4);
    store.inventory.push(record1);
    store.inventory.push(record2);
    store.inventory.push(record3);
    store.inventory.push(record5);
    store.inventory.push(record6);
  }) //end of beforeEach

  it("Store should have 4 records in it", function(){
    assert.strictEqual(store.inventory.length, 6);
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
    assert.strictEqual(store.inventoryValue(), "Total cost of Stock = 71 Balance = 1000");
  })

  // it("should display the balance and value of the inventory"), function(){
  //   // store.calculateFinanace();
  //   assert.strictEqual(store.calculateFinanace(inventoryValue()), "1000 41");
  //   // assert.strictEqual(store.inventoryValue, 41);
  // }

  it("should display the records of the same genre", function(){
    assert.strictEqual(store.dispayByGenre(genre), [record1, record2, record3])
  })



}) // end of describe;
