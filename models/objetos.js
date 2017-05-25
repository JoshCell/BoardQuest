var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var objetos = {ID_Num:Number, Nombre:String, Efecto:String, Precio:Number, Descripcion:String, Url:String};
var objetos_schema = new Schema(objetos);
var objs = mongoose.model("objetos", objetos_schema);

var nueva = new objs({ID_Num:001, Nombre:"", Precio:250, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
