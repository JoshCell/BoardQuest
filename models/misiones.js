var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var misiones = {ID_Num:Number, Tipo:String, Descripcion:String, Objetivo:String, CantidadObjetivo:Number, Recompensaobjeto:Object[objetos], RecompensaDinero:Number, RecompensaExp:Number};

var misiones_schema = new Schema(misiones);
var mis = mongoose.model("misiones", misiones_schema);

// MISIONES CACERIA

var nueva = new mis({ID_Num:001, Tipo:"Caceria", Descripcion:"Mata la siguiente cantidad de lobos: ", Objetivo:"lobo", CantidadObjetivo:5, Recompensaobjeto:"", RecompensaDinero:300, RecompensaExp:500});
nueva.save(function(err){ console.log(err); });

// MISIONES BÚSQUEDA

var nueva = new mis({ID_Num:101, Tipo:"Busqueda", Descripcion:"Encuéntrame el siguiente objeto: ", Objetivo:"hierba", CantidadObjetivo:3, Recompensaobjeto:"", RecompensaDinero:200, RecompensaExp:200});
nueva.save(function(err){ console.log(err); });

// MISIONES ESCOLTA

var nueva = new mis({ID_Num:201, Tipo:"Escolta", Descripcion:"Escolta estas personas hasta el siguiente punto: ", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:600, RecompensaExp:500});
nueva.save(function(err){ console.log(err); });

// 

var nueva = new mis({ID_Num:004, Tipo:"", Descripcion:"", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:1, RecompensaExp:1});
nueva.save(function(err){ console.log(err); });
var nueva = new mis({ID_Num:005, Tipo:"", Descripcion:"", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:1, RecompensaExp:1});
nueva.save(function(err){ console.log(err); });
var nueva = new mis({ID_Num:006, Tipo:"", Descripcion:"", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:1, RecompensaExp:1});
nueva.save(function(err){ console.log(err); });
var nueva = new mis({ID_Num:007, Tipo:"", Descripcion:"", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:1, RecompensaExp:1});
nueva.save(function(err){ console.log(err); });
var nueva = new mis({ID_Num:008, Tipo:"", Descripcion:"", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:1, RecompensaExp:1});
nueva.save(function(err){ console.log(err); });
var nueva = new mis({ID_Num:009, Tipo:"", Descripcion:"", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:1, RecompensaExp:1});
nueva.save(function(err){ console.log(err); });
var nueva = new mis({ID_Num:010, Tipo:"", Descripcion:"", Objetivo:"", CantidadObjetivo:1, Recompensaobjeto:"", RecompensaDinero:1, RecompensaExp:1});
nueva.save(function(err){ console.log(err); });
