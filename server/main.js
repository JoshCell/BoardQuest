var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose = require('mongoose');
//var routes = require('./routes/index');
//var users = require('./routes/users');
//var models = require('./models');
//var path = require('path');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');

var urlmongo = 'mongodb://localhost:27017/test';

MongoClient.connect(urlmongo, function(err, db){
	assert.equal(null, err);
	console.log("Connected successfully to server");

	insertDocuments(db, function(){
		db.close();
	});
});

// INSERTAR DOCUMENTOS EN MONGODB

var insertDocuments = function(db, callback) {
	var collection = db.collection('users');
	collection.insertMany([
		{name : 'Josh_Cell'}, {name : 'Josh'}, {name : 'JoshCell'}
	], function(err, result){
		assert.equal(err, null);
		assert.equal(3, result.result.n);
		assert.equal(3, result.ops.length);
		console.log("Inserted 3 documents into the collection");
		callback(result);
	});
}



mongoose.connect('mongodb://localhost:27017/test');

mongoose.model('users',{name: String});
mongoose.model('posts',{content: String});

app.get('/users', function(req, res){
	mongoose.model('users').find(function(err, users){
		res.send(users);
	});
});

app.get('/posts', function(req, res){
	mongoose.model('posts').find(function(err, posts){
		res.send(posts);
	});
});


var messages = [{
	id: 1,
	author: "chat daw",
	text: "Bienvenido al chat del proyecto"
}];



app.use(express.static('public'));

app.get('/hello', function(req, res){
	res.status(200).send("Hello World!");
});

io.on('connection', function(socket){
	console.log('Un usuario se ha conectado');
	socket.emit('messages', messages);


	socket.on('new-message', function(data){
		messages.push(data);

		io.sockets.emit('messages', messages);
	});
});

server.listen(8080, function() {
console.log('Servidor corriendo en http://localhost:8080');
});
