const Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

module.exports = Store;

// Store.prototype.showInventory = function () {
//   return this.inventory.toString();
//
// };

// Store.prototype.showInventory = function () {
//   return this.inventory.toLocaleString(record.printInfo());
// };

// Store.prototype.showInventory = function () {
//      return this.inventory.forEach(function(record) {
//      record.printInfo();
//   })

// Store.prototype.showInventory = function () {
//   let result = null;
//   for (record of this.inventory) {
//     result = record.printInfo();
//   }

// return result
// };

Store.prototype.sell = function (record) {
    this.balance += record.price;
};

Store.prototype.inventoryValue = function() {
  let sum = 0;
  this.inventory.forEach(function(record) {
    sum += record.price;
  })
  return "Total cost of Stock = " + sum + " Balance = " + this.balance;
};

// Store.prototype.calculateFinanace = function () {
//   let sum = inventoryValue();
//   return " " + this.balance + " " + sum;
// };
//
// Store.prototype.displayByGenre = function (inventory, record) {
//     return this.inventory.filter(function(record, genre){
//       return genre === record.genre
//     })
// };
