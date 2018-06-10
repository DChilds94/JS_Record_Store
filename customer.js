const Customer = function(cash){
  this.cash = cash;
  this.collection = [];
}


Customer.prototype.buy = function (record) {
  if ( this.cash >= record.price) {
  this.collection.push(record);
  this.cash -= record.price;
} else {
  return "insufficient funds"
}
};


// Customer.prototype.valueOfCollection = function () {
//     let sum = 0;
//     this.collection.forEach(function(record){
//       sum += record.price;
//     })
//     return sum;
// };
Customer.prototype.valueOfCollection = function () {
  return this.collection.reduce(function(sum, record){
    return sum + record.price;
  }, 0);
};

Customer.prototype.highestValue = function () {
  this.collection.sort(function(record1, record2){
    return record2.price - record1.price;
  })
  return this.collection[0];

};




module.exports = Customer;
