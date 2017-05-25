var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var personajes = {ID_Num:Number, Nombre:String, Clase:String, Nivel:Number, Vitalidad:Number, Mana:Number, Ataque:Number, Defensa:Number, Magia:Number, Velocidad:Number, Experiencia:Number, Dinero:Number, Arma:Object[armas], Armadura:Object[armadura], Habilidades:Object[habilidades], url:String};

var personajes_schema = new Schema(personajes);
var pers = mongoose.model("personajes", personajes_schema);
var nueva = new pers({ID_Num:01, Nombre:"", Clase:"Guerrero", Nivel:1, Vitalidad:450, Mana:5, Ataque:30, Defensa:45, Magia:5, Velocidad:20, Experiencia:0, Dinero:200, Arma:"", Armadura:"", Habilidades:"", url:""});
nueva.save(function(err){ console.log(err); });

var nueva = new pers({ID_Num:02, Nombre:"", Clase:"Caballero", Nivel:1, Vitalidad:350, Mana:10, Ataque:35, Defensa:25, Magia:15, Velocidad:25, Experiencia:0, Dinero:200, Arma:"", Armadura:"", Habilidades:"", url:""});
nueva.save(function(err){ console.log(err); });

var nueva = new pers({ID_Num:03, Nombre:"", Clase:"Ladron", Nivel:1, Vitalidad:250, Mana:15, Ataque:20, Defensa:15, Magia:20, Velocidad:45, Experiencia:0, Dinero:200, Arma:"", Armadura:"", Habilidades:"", url:""});
nueva.save(function(err){ console.log(err); });

var nueva = new pers({ID_Num:04, Nombre:"", Clase:"Mago", Nivel:1, Vitalidad:300, Mana:40, Ataque:15, Defensa:20, Magia:40, Velocidad:25, Experiencia:0, Dinero:200, Arma:"", Armadura:"", Habilidades:"", url:""});
nueva.save(function(err){ console.log(err); });

var nueva = new pers({ID_Num:05, Nombre:"", Clase:"Arquero", Nivel:1, Vitalidad:325, Mana:15, Ataque:25, Defensa:20, Magia:20, Velocidad:35, Experiencia:0, Dinero:200, Arma:"", Armadura:"", Habilidades:"", url:""});
nueva.save(function(err){ console.log(err); });
