const assert = require('assert');
const Record = require('../record.js');
const Store = require('../store.js');
const Customer = require('../customer.js');

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
    customer1 = new Customer(100);
    customer2 = new Customer(10);

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

  xit("should display the balance and value of the inventory"), function(){
    // store.calculateFinanace();
    assert.strictEqual(store.calculateFinanace(inventoryValue()), "1000 41");
    // assert.strictEqual(store.inventoryValue, 41);
  }

  xit("should display the records of the same genre", function(){
    assert.strictEqual(store.dispayByGenre(genre), [record1, record2, record3])
  })

  it('customer1 will buy record 1 it will decrease the cash and the array will be the length of one', function(){
    customer1.buy(record1);
    assert.strictEqual(customer1.collection.length, 1);
    assert.strictEqual(customer1.cash, 90);
  })

  it('customer2 should not be able to buy record4, funds too low', function(){
    customer2.buy(record4);
    assert.strictEqual(customer2.collection.length, 0);
    assert.strictEqual(customer2.buy(record4), "insufficient funds")
  })

  it('customer2 should be able to buy record2, funds ==== to price', function (){
    customer2.buy(record2);
    assert.strictEqual(customer2.collection.length, 1);
    assert.strictEqual(customer2.cash, 0);
  })

  it('should display customer1s total value of the collection', function(){
    customer1.collection.push(record1);
    customer1.collection.push(record2);
    customer1.collection.push(record3);
    customer1.collection.push(record4);
    assert.strictEqual(customer1.valueOfCollection(), 45);
  })

  it('should get customer1s highest value record aka record4', function(){
    customer1.collection.push(record1);
    customer1.collection.push(record2);
    customer1.collection.push(record3);
    customer1.collection.push(record4);
    assert.strictEqual(customer1.highestValue(), record4);
  })

  xit('customer2 has 2 items of the same value - should get two back', function(){
    customer2.collection.push(record6);
    customer2.collection.push(record4);
    // console.log(customer2.highestValue());
    assert.deepStrictEqual(customer2.highestValue(), [record4, record6]);
  })

  it('should sort records by price', function(){
    customer1.collection.push(record1);
    customer1.collection.push(record6);
    customer1.collection.push(record5);
    assert.deepStrictEqual(customer1.sortByValue(), [record6, record5, record1]);
  })

  it('should compare values of collections and display that customer1 has the highest value', function(){
    customer1.collection.push(record1);
    customer1.collection.push(record6);
    customer1.collection.push(record5);
    customer2.collection.push(record6);
    customer2.collection.push(record4);
    assert.strictEqual(customer1.compare(customer2), "Customer1 has the highest value: 36")
  })
  it('should compare values of collections and display that customer2 has the highest value', function(){
    customer1.collection.push(record1);
    customer1.collection.push(record6);
    customer1.collection.push(record5);
    customer2.collection.push(record6);
    customer2.collection.push(record4);
    customer2.collection.push(record2);
    customer2.collection.push(record3);
    assert.strictEqual(customer1.compare(customer2), "The other customer has the highest value: 50")
  })




}) // end of describe;
