const express = require('express');
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/card/:email",controllers.getCardByID);
app.get("/simulation/:email",controllers.getSimulationByID);
app.post("/createCard",controllers.newCard);
app.post("/createSimulation",controllers.newSimulation)


const PORT = 4000;
app.listen(PORT,()=>{
    console.log('Servidor conectado en 4000');
    db();
});

module.exports = app;