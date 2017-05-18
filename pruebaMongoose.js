var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log("conectados!");
});

var Schema = mongoose.Schema;

var prueba = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date}],
  date: { type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
