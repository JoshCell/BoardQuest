var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var habilidades = {ID_Num:Number, Nombre:String, Clase:String, Nivel:Number, Descripcion:String, DañoBase:Number, Mana:Number, Efecto:String};

var habilidades_schema = new Schema(habilidades);
var hab = mongoose.model("habilidades", habilidades_schema);


// HABILIDADES COMBATE CABALLERO

var nueva = new hab({ID_Num:001, Nombre:"Estocada", Clase:"Ataque", Nivel:2, Descripcion:"", DañoBase:30, Mana:2, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:002, Nombre:"Golpe Doble", Clase:"Ataque", Nivel:5, Descripcion:"", DañoBase:20*2, Mana:3, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:003, Nombre:"Minicuración", Clase:"Magia", Nivel:9, Descripcion:"", DañoBase:-10, Mana:5, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:004, Nombre:"Barrido", Clase:"Ataque", Nivel:13, Descripcion:"", DañoBase:15, Mana:6, Efecto:"Todos"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:005, Nombre:"Fogata", Clase:"Magia", Nivel:18, Descripcion:"", DañoBase:55, Mana:10, Efecto:""});
nueva.save(function(err){ console.log(err); });

// HABILIDADES COMBATE GUERRERO

var nueva = new hab({ID_Num:101, Nombre:"Golpe de Carga", Clase:"Ataque", Nivel:3, Descripcion:"", DañoBase:40, Mana:2, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:102, Nombre:"Temblor", Clase:"Ataque", Nivel:6, Descripcion:"", DañoBase:30, Mana:5, Efecto:"Todos"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:103, Nombre:"Paliza", Clase:"Ataque", Nivel:10, Descripcion:"", DañoBase:25, Mana:0, Efecto:"Entre 2 y 5 golpes"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:104, Nombre:"Defensa Reparadora", Clase:"Defensa", Nivel:15, Descripcion:"", DañoBase:-5, Mana:1, Efecto:"Defensa"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:105, Nombre:"Destructora", Clase:"Ataque", Nivel:20, Descripcion:"", DañoBase:100, Mana:10, Efecto:""});
nueva.save(function(err){ console.log(err); });

//HABILIDADES COMBATE ARQUERO

var nueva = new hab({ID_Num:201, Nombre:"Flecha Ardiente", Clase:"Magia", Nivel:2, Descripcion:"", DañoBase:15, Mana:5, Efecto:"Fuego"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:202, Nombre:"Flecha Helada", Clase:"Magia", Nivel:5, Descripcion:"", DañoBase:15, Mana:6, Efecto:"Hielo"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:203, Nombre:"Multiflecha", Clase:"Ataque", Nivel:8, Descripcion:"", DañoBase:25, Mana:10, Efecto:"Todos"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:204, Nombre:"Penetradora", Clase:"Ataque", Nivel:12, Descripcion:"", DañoBase:40, Mana:10, Efecto:"Ignorar defensa"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:205, Nombre:"Contra", Clase:"Ataque", Nivel:16, Descripcion:"", DañoBase:10, Mana:15, Efecto:"Contraataque"});
nueva.save(function(err){ console.log(err); });

//HABILIDADES COMBATE MAGO

var nueva = new hab({ID_Num:301, Nombre:"Piro", Clase:"Magia", Nivel:2, Descripcion:"", DañoBase:15, Mana:5, Efecto:"Fuego"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:302, Nombre:"Cura", Clase:"Magia", Nivel:4, Descripcion:"", DañoBase:-15, Mana:6, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:303, Nombre:"Hielo", Clase:"Magia", Nivel:6, Descripcion:"", DañoBase:15, Mana:7, Efecto:"Hielo"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:304, Nombre:"Veneno", Clase:"Magia", Nivel:9, Descripcion:"", DañoBase:10, Mana:15, Efecto:"Veneno"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:305, Nombre:"Terremoto", Clase:"Magia", Nivel:12, Descripcion:"", DañoBase:25, Mana:20, Efecto:"Todos"});
nueva.save(function(err){ console.log(err); });

//HABILIDADES COMBATE LADRÓN

var nueva = new hab({ID_Num:401, Nombre:"Robar", Clase:"Ataque", Nivel:2, Descripcion:"", DañoBase:0, Mana:0, Efecto:"Robar"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:402, Nombre:"Robavida", Clase:"Ataque", Nivel:5, Descripcion:"", DañoBase:10, Mana:5, Efecto:"Drenaje"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:403, Nombre:"Robamana", Clase:"Ataque", Nivel:8, Descripcion:"", DañoBase:2, Mana:1, Efecto:"Drenamana"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:404, Nombre:"Ataque Rapido", Clase:"Ataque", Nivel:12, Descripcion:"", DañoBase:15, Mana:8, Efecto:"Primero"});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:405, Nombre:"Invisible", Clase:"Magia", Nivel:15, Descripcion:"", DañoBase:0, Mana:10, Efecto:"Inmune"});
nueva.save(function(err){ console.log(err); });


// HABILIDADES PASIVAS
