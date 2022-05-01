const {model, Schema} = require("mongoose");

const TarjetaSchema = new Schema({
    ownerEmail: {type: String, required:true},
    nombre: {type: String, required: true},
    nroTarjeta: {type: String, required: true, unique:true},
    cuotaManejo: {type:String, required:true},
    tasaInteres: {type:String, required:true},
    tipoTarjeta: {type:String, required:true},
});

module.exports = model('Tarjeta',TarjetaSchema);