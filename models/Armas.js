var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var armas = {ID_Num:Number, Nombre:String, Clase:String, Ataque:Number, Precio:Number, Descripcion:String, Url:String};
var armas_schema = new Schema(armas);
var arms = mongoose.model("Armas", armas_schema);
var nueva = new arms({ID_Num:001, Nombre:"espada de cobre", Clase:"Caballero", Ataque:15, Precio:200, Descripcion:"Espada de cobre, débil pero corta", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:002, Nombre:"espada de hierro", Clase:"Caballero", Ataque:18, Precio:300, Descripcion:"Espada tradicional para caballeros iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:003, Nombre:"espada real", Clase:"Caballero", Ataque:23, Precio:550, Descripcion:"Espada de la guardia real", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:004, Nombre:"estoque", Clase:"Caballero", Ataque:29, Precio:780, Descripcion:"Estoque usado por la nobleza", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:005, Nombre:"estoque oscuro", Clase:"Caballero", Ataque:35, Precio:1200, Descripcion:"Espada mitica usada según la leyenda por un principe maldito", Url:""});
nueva.save(function(err){ console.log(err); });


var nueva = new arms({ID_Num:0011, Nombre:"arco corto", Clase:"Arquero", Ataque:13, Precio:180, Descripcion:"Arco estándar para arqueros iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:0012, Nombre:"arco angelical", Clase:"Arquero", Ataque:27, Precio:880, Descripcion:"Arco inbuido en el poder de los cielos", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:0013, Nombre:"arco de cuero", Clase:"Arquero", Ataque:18, Precio:470, Descripcion:"Arco forrado en cuero que mejora la precisión", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:0014, Nombre:"arco macizo", Clase:"Arquero", Ataque:22, Precio:650, Descripcion:"Fuerte arco, poco flexible pero potente", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:0015, Nombre:"arco élfico", Clase:"Arquero", Ataque:34, Precio:1140, Descripcion:"Fabricado por maestros arqueros en un bosque mitológico", Url:""});
nueva.save(function(err){ console.log(err); });


var nueva = new arms({ID_Num:021, Nombre:"hacha de acero", Clase:"Guerrero", Ataque:18, Precio:250, Descripcion:"Hacha tradicional para guerreros iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:022, Nombre:"hacha monstruosa", Clase:"Guerrero", Ataque:30, Precio:470, Descripcion:"Hacha de aspecto intimidante, su filo se extrajo de los restos de un monstruo", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:023, Nombre:"hacha helada", Clase:"Guerrero", Ataque:41, Precio:750, Descripcion:"Hacha forjada en unas tierras gélidas y lejanas", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:024, Nombre:"hacha mantis", Clase:"Guerrero", Ataque:47, Precio:1010, Descripcion:"Hacha forjada con la guadaña de una mantis", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:025, Nombre:"desgarradora", Clase:"Guerrero", Ataque:57, Precio:1550, Descripcion:"Hacha de doble filo extremadamente pesada", Url:""});
nueva.save(function(err){ console.log(err); });


var nueva = new arms({ID_Num:031, Nombre:"vara de perla", Clase:"Mago", Ataque:10, Precio:160, Descripcion:"Vara tallada con una perla en el centro", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:032, Nombre:"vara mistica", Clase:"Mago", Ataque:15, Precio:260, Descripcion:"Vara tradicional para magos iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:033, Nombre:"vara de roble", Clase:"Mago", Ataque:19, Precio:340, Descripcion:"Vara tallada en madera de roble", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:034, Nombre:"vara de aura", Clase:"Mago", Ataque:22, Precio:490, Descripcion:"Vara que emana un aura de energía", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:035, Nombre:"flauta encantadora", Clase:"Mago", Ataque:25, Precio:670, Descripcion:"instrumento cuyas notas invoca las fuerzas de los elementos", Url:""});
nueva.save(function(err){ console.log(err); });


var nueva = new arms({ID_Num:041, Nombre:"daga corta", Clase:"Ladron", Ataque:14, Precio:175, Descripcion:"Daga tradicional para ladrones iniciados", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:042, Nombre:"puñal", Clase:"Ladron", Ataque:18, Precio:255, Descripcion:"Puñal corto pensaod para clavar en los enemigos", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:043, Nombre:"penetradora", Clase:"Ladron", Ataque:23, Precio:370, Descripcion:"Filo atravesador, similar a una bala", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:044, Nombre:"kukri", Clase:"Ladron", Ataque:28, Precio:520, Descripcion:"Daga de aspecto oriental de filo curvo", Url:""});
nueva.save(function(err){ console.log(err); });
var nueva = new arms({ID_Num:045, Nombre:"daga de doble filo", Clase:"Ladron", Ataque:33, Precio:725, Descripcion:"Daga de filos dobles curvos como garras", Url:""});
nueva.save(function(err){ console.log(err); });
