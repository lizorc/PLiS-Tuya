const Tarjeta = require("../model/card");

const newCard = async (req,res)=>{
    const {ownerEmail,nombre,nroTarjeta,cuotaManejo,tasaInteres,tipoTarjeta} = req.body;
    Tarjeta.findOne({nroTarjeta}).then((tarjeta)=>{
      if(tarjeta){
        return res.json({mensaje:"Ya existe una tarjeta con ese número"});
      }else if(!ownerEmail || !nombre || !nroTarjeta || !cuotaManejo || !tasaInteres || !tipoTarjeta){
        return res.json({mensaje:"Falta información por rellenar"});
      }else{
        const nuevaTarjeta = new Tarjeta({
          ownerEmail,
          nombre,
          nroTarjeta,
          cuotaManejo,
          tasaInteres,
          tipoTarjeta
        });

        nuevaTarjeta.save().then((tarjeta)=>{
          res.json({mensaje:"Tarjeta creada correctamente", tarjeta});
        }).catch((error)=>console.error(error));

      }
    })
};
  
  module.exports = newCard;