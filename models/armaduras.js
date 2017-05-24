var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var armaduras = {ID_Num:Number, Nombre:String, Clase:String, Defensa:Number, Habilidad:Object[habilidades], Precio:Number, Descripcion:String, Url:String};

var armaduras_schema = new Schema(armaduras);
var armadurs = mongoose.model("armaduras", armaduras_schema);

// ARMADURAS CABALLERO

var nueva = new armadurs({ID_Num:001, Nombre:"armadura de cuero", Clase:"Caballero", Defensa:10, Habilidad:"", Precio:250, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:002, Nombre:"armadura de hierro", Clase:"Caballero", Defensa:18, Habilidad:"", Precio:500, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:003, Nombre:"armadura de oro", Clase:"Caballero", Defensa:30, Habilidad:"", Precio:800, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:004, Nombre:"armadura dimensional", Clase:"Caballero", Defensa:40, Habilidad:"", Precio:1100, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });

// ARMADURAS GUERRERO

var nueva = new armadurs({ID_Num:011, Nombre:"cinturon de cuero", Clase:"Guerrero", Defensa:15, Habilidad:"", Precio:250, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:012, Nombre:"cinturon bravo", Clase:"Guerrero", Defensa:25, Habilidad:"", Precio:550, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:013, Nombre:"cinto de campeon", Clase:"Guerrero", Defensa:35, Habilidad:"", Precio:850, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:014, Nombre:"cinturon indestructible", Clase:"Guerrero", Defensa:55, Habilidad:"", Precio:1200, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });

// ARMADURAS ARQUERO

var nueva = new armadurs({ID_Num:021, Nombre:"chaleco de cuero", Clase:"Arquero", Defensa:10, Habilidad:"", Precio:250, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:022, Nombre:"peto de cadenas", Clase:"Arquero", Defensa:17, Habilidad:"", Precio:480, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:023, Nombre:"peto elfico", Clase:"Arquero", Defensa:25, Habilidad:"", Precio:750, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:024, Nombre:"chaleco angelical", Clase:"Arquero", Defensa:33, Habilidad:"", Precio:1050, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });

// ARMADURAS LADRON

var nueva = new armadurs({ID_Num:031, Nombre:"camisa blanca", Clase:"Ladron", Defensa:10, Habilidad:"", Precio:250, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:032, Nombre:"camisa reforzada", Clase:"Ladron", Defensa:15, Habilidad:"", Precio:370, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:033, Nombre:"chaqueta liviana", Clase:"Ladron", Defensa:20, Habilidad:"", Precio:550, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:034, Nombre:"traje aerodinamico", Clase:"Ladron", Defensa:25, Habilidad:"", Precio:750, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });

// ARMADURAS MAGO 

var nueva = new armadurs({ID_Num:041, Nombre:"capucha de cuero", Clase:"Mago", Defensa:10, Habilidad:"", Precio:250, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:042, Nombre:"tunica blanca", Clase:"Mago", Defensa:15, Habilidad:"", Precio:450, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:043, Nombre:"manto de mana", Clase:"Mago", Defensa:25, Habilidad:"", Precio:650, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new armadurs({ID_Num:044, Nombre:"capucha iridiscente", Clase:"Mago", Defensa:30, Habilidad:"", Precio:950, Descripcion:"", Url:""});
nueva.save(function(err){ console.log(err); });
