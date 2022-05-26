const {model, Schema} = require("mongoose");

const SimulationSchema = new Schema({
    ownerEmail: {type: String, required:true},
    valorCuota: {type: String, required:true},
    tiempo: {type: String, required: true},
    nombre: {type: String, required: true },
});

module.exports = model('Simulation',SimulationSchema);