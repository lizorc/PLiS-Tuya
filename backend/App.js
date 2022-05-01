const express = require('express');
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/card/:email",controllers.getCardByID);
app.post("/createCard",controllers.newCard);

const PORT = 4000;
app.listen(PORT,()=>{
    console.log('Servidor conectado en 4000');
    db();
});

module.exports = app;