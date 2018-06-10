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

module.exports = Customer;
