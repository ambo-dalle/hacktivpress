var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var artikelSchema = new Schema({
  title:  String,
  content: String,
  category:   String,
  author: { type : Schema.Types.ObjectId, ref : 'User' }
  createdAt: Date
});

var Artikel = mongoose.model('Artikel', artikelSchema);

module.exports = Artikel
