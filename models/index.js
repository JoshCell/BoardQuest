var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

//ARMADURAS

var armaduras = {ID_Num:Number, Nombre:String, Clase:String, Defensa:Number, Habilidad:Object[habilidades], Precio:Number, Descripcion:String, Url:String};
var armaduras_schema = new Schema(armaduras);
var armadurs = mongoose.model("armaduras", armaduras_schema);

module.exports.Armadurs = armadurs;

//ARMAS

var armas = {ID_Num:Number, Nombre:String, Clase:String, Ataque:Number, Precio:Number, Descripcion:String, Url:String};
var armas_schema = new Schema(armas);
var arms = mongoose.model("Armas", armas_schema);

module.exports.Arms = arms;

//CASILLAS

var casillas = {ID_num:Number, Tipo:String, PosX:Number, PosY:Number, Evento:String, url1:String, url2:String};
var casillas_schema = new Schema(casillas);
var cas = mongoose.model("casillas", casillas_schema);

module.exports.Cas = cas;

//HABILIDADES

var habilidades = {ID_Num:Number, Nombre:String, Clase:String, Nivel:Number, Descripcion:String, DañoBase:Number, Mana:Number, Efecto:String};
var habilidades_schema = new Schema(habilidades);
var hab = mongoose.model("habilidades", habilidades_schema);

module.exports.Hab = hab;

//MISIONES

var misiones = {ID_Num:Number, Tipo:String, Descripcion:String, Objetivo:String, CantidadObjetivo:Number, Recompensaobjeto:Object[objetos], RecompensaDinero:Number, RecompensaExp:Number};
var misiones_schema = new Schema(misiones);
var mis = mongoose.model("misiones", misiones_schema);

module.exports.Mis = mis;

//MONSTRUOS

var monstruos = {ID_Num:Number, Nombre:String, Clase:String, Nivel:Number, Vitalidad:Number, Ataque:Number, Defensa:Number, Magia:Number, Velocidad:Number, Experiencia:Number, Dinero:Number, Habilidad1:Object[habilidades], Habilidad2:Object[habilidades], Habilidad3:Object[habilidades], Habilidad4:Object[habilidades], url:String};
var monstruos_schema = new Schema(monstruos);
var mons = mongoose.model("monstruos", monstruos_schema);

module.exports.Mons = mons;

//OBJETOS

var objetos = {ID_Num:Number, Nombre:String, Efecto:String, Precio:Number, Descripcion:String, Url:String};
var objetos_schema = new Schema(objetos);
var objs = mongoose.model("objetos", objetos_schema);

modules.exports.Objs = objs;

//PERSONAJES

var personajes = {ID_Num:Number, Nombre:String, Clase:String, Nivel:Number, Vitalidad:Number, Mana:Number, Ataque:Number, Defensa:Number, Magia:Number, Velocidad:Number, Experiencia:Number, Dinero:Number, Arma:Object[armas], Armadura:Object[armadura], Habilidades:Object[habilidades], url:String};
var personajes_schema = new Schema(personajes);
var pers = mongoose.model("personajes", personajes_schema);

module.exports.Pers = pers;
