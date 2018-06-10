const Customer = function(cash){
  this.cash = cash;
  this.collection = [];
}


Customer.prototype.buy = function (record) {
  this.collection.push(record);
  this.cash -= record.price;
};

module.exports = Customer;
