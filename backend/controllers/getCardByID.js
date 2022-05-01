const Tarjeta = require("../model/card");

const getCardById = async (req,res)=>{
    const {email} = req.params;

    if(email.length !== 1){
        Tarjeta.find({
            ownerEmail : {email}.email
        }).then((tarjeta)=>{
            if(!tarjeta){
                return res.json({mensaje: "Este usuario no tiene tarjetas"});
            }else{
                res.json(tarjeta);
            }
        });
    }else{
        res.json({mensaje: "Estas enviando un email incorrecto"});
    }
};

module.exports = getCardById