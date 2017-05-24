var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var habilidades = {ID_Num:Number, Nombre:String, Clase:String, Descripcion:String, DañoBase:Number, Efecto:String};

var habilidades_schema = new Schema(habilidades);
var hab = mongoose.model("habilidades", habilidades_schema);


// HABILIDADES CABALLERO

var nueva = new hab({ID_Num:001, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:002, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:003, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:004, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:005, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });

// HABILIDADES GUERRERO

var nueva = new hab({ID_Num:101, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:102, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:103, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:104, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:105, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });

//HABILIDADES ARQUERO

var nueva = new hab({ID_Num:201, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:202, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:203, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:204, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:205, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });

//HABILIDADES MAGO

var nueva = new hab({ID_Num:301, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:302, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:303, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:304, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:305, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });

//HABILIDADES LADRÓN

var nueva = new hab({ID_Num:401, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:402, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:403, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:404, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
var nueva = new hab({ID_Num:405, Nombre:"", Clase:"", Descripcion:"", DañoBase:1, Efecto:""});
nueva.save(function(err){ console.log(err); });
