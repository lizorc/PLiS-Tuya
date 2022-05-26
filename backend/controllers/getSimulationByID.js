const Simulacion = require("../model/simulation");

const getSimulationByID = async (req,res)=>{
    const {email} = req.params;

    if(email.length !== 1){
        Simulacion.find({
            ownerEmail : {email}.email
        }).then((simulacion)=>{
            if(!simulacion){
                return res.json({mensaje: "Este usuario no tiene simulaciones"});
            }else{
                res.json(simulacion);
            }
        });
    }else{
        res.json({mensaje: "Estas enviando un email incorrecto"});
    }
};

module.exports = getSimulationByID