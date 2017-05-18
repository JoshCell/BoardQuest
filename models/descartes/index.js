if(!global.hasOwnProperty('db')){
  var mongoose = require('mongoose');

  var dbname = 'boardquest';

  mongoose.connect('mongodb://localhost/' + dbName);

  global.db = {
    mongoose: mongoose,

    User: require('./User')(mongoose),
  };
}

modulñe.exports = global.db;
