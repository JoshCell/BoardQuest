var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var monstruos = {ID_Num:Number, Nombre:String, Clase:String, Nivel:Number, Vitalidad:Number, Ataque:Number, Defensa:Number, Magia:Number, Velocidad:Number, Experiencia:Number, Dinero:Number, Habilidad1:Object[habilidades], Habilidad2:Object[habilidades], Habilidad3:Object[habilidades], Habilidad4:Object[habilidades], url:String};

var monstruos_schema = new Schema(monstruos);
var mons = mongoose.model("monstruos", monstruos_schema);

//MONSTRUOS COMUNES

var nueva = new mons({ID_Num:01, Nombre:"bandido", Clase:"humano", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:20, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:02, Nombre:"lobo", Clase:"bestia", Nivel:1, Vitalidad:250, Ataque:15, Defensa:5, Magia:2, Velocidad:25, Experiencia:75, Dinero:25, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:03, Nombre:"pajarraco", Clase:"bestia", Nivel:1, Vitalidad:150, Ataque:10, Defensa:10, Magia:2, Velocidad:30, Experiencia:80, Dinero:30, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:04, Nombre:"soldado", Clase:"humano", Nivel:1, Vitalidad:200, Ataque:20, Defensa:20, Magia:5, Velocidad:10, Experiencia:70, Dinero:100, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:05, Nombre:"abominacion", Clase:"engendro", Nivel:1, Vitalidad:400, Ataque:25, Defensa:20, Magia:35, Velocidad:25, Experiencia:150, Dinero:250, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:06, Nombre:"babosa", Clase:"engendro", Nivel:1, Vitalidad:200, Ataque:5, Defensa:10, Magia:40, Velocidad:20, Experiencia:120, Dinero:150, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:07, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:08, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:09, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:10, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:11, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:12, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:13, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:14, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:15, Nombre:"", Clase:"", Nivel:1, Vitalidad:100, Ataque:10, Defensa:10, Magia:5, Velocidad:15, Experiencia:50, Dinero:200, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });

//JEFES

var nueva = new mons({ID_Num:16, Nombre:"octopodo loco", Clase:"bestia", Nivel:10, Vitalidad:1500, Ataque:75, Defensa:50, Magia:25, Velocidad:75, Experiencia:1000, Dinero:600, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:17, Nombre:"pesadilla eterea", Clase:"engendro", Nivel:20, Vitalidad:3000, Ataque:50, Defensa:75, Magia:100, Velocidad:150, Experiencia:2000, Dinero:800, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:18, Nombre:"ogro del inframundo", Clase:"engendro", Nivel:30, Vitalidad:5000, Ataque:150, Defensa:125, Magia:75, Velocidad:120, Experiencia:3000, Dinero:1000, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:19, Nombre:"gigante enfurecido", Clase:"humano", Nivel:40, Vitalidad:7000, Ataque:175, Defensa:150, Magia:35, Velocidad:100, Experiencia:4000, Dinero:1000, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new mons({ID_Num:20, Nombre:"bestia infernal", Clase:"bestia", Nivel:50, Vitalidad:10000, Ataque:200, Defensa:150, Magia:125, Velocidad:135, Experiencia:5000, Dinero:2000, Habilidad1:"", Habilidad2:"", Habilidad3:"", Habilidad4:"", url:""});
nueva.save(function(err){ console.log(err); });
