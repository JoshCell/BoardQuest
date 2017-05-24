var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/database");

var casillas = {ID_num:Number, Tipo:String, PosX:Number, PosY:Number, Evento:String, url1:String, url2:String};


var casillas_schema = new Schema(casillas);
var cas = mongoose.model("casillas", casillas_schema);

//CASILLAS BATALLA

var nueva = new cas({ID_num:001, Tipo:"", PosX:0, PosY:0, Evento:"", url1:"", url2:""});
nueva.save(function(err){ console.log(err); });

//CASILLAS EVENTO 



// CASILLAS MISIÓN




// CASILLAS BOSS
