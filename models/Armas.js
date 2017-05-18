var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var armas = {ID_Num:Number, Nombre:String, Clase:String, Ataque:Number, Precio:Number, Descripcion:String, Url:String};
var armas_schema = new Schema(armas);
var arms = mongoose.model("Armas", armas_schema);
var nueva = new arms({ID_Num:001, Nombre:"Espada corta", Clase:"Caballero", Ataque:15, Precio:200, Descripcion:"Espada tradicional para caballeros iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:002, Nombre:"Arco corto", Clase:"Arquero", Ataque:13, Precio:180, Descripcion:"Arco estándar para arqueros iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:003, Nombre:"Hacha corta", Clase:"Guerrero", Ataque:18, Precio:250, Descripcion:"Hacha tradicional para guerreros iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:004, Nombre:"Vara corta", Clase:"Mago", Ataque:10, Precio:160, Descripcion:"Vara tradicional para magos iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:005, Nombre:"Daga corta", Clase:"Ladron", Ataque:14, Precio:175, Descripcion:"Daga tradicional para ladrones iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
