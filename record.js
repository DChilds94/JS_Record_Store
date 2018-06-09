const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

module.exports = Record;


// Record.prototype.printInfo = function () {
//     for (property in this.record)
//     alert(propety);
//   };
//
//   Record.prototype.printInfo = function(){
//     return this.artist.title.genre.price;
//
//   }
//
Record.prototype.printInfo = function () {
  return (this.artist + ", " + this.title + ", " + this.genre + ", " + this.price);
};
//
