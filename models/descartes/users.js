//module.exports = function(mongoose)[];

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: String});

mongoose.model('users', usersSchema);
