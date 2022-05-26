const Simulacion = require("../model/simulation");

const newSimulation = async (req,res)=>{
    const {ownerEmail,valorCuota,tiempo,nombre} = req.body;
    Simulacion.findOne({ownerEmail}).then((simulacion)=>{
      if(!ownerEmail || !valorCuota || !tiempo || !nombre){
        return res.json({mensaje:"Falta información por rellenar"});
      }else{
        const nuevaSimulacion = new Simulacion({
          ownerEmail,
          valorCuota,
          tiempo,
          nombre
        });

        nuevaSimulacion.save().then((simulacion)=>{
          res.json({mensaje:"Simulacion creada correctamente", simulacion});
        }).catch((error)=>console.error(error));

      }
    })
};
  
  module.exports = newSimulation;