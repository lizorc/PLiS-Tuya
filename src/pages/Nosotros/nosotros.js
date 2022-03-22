//import React, { Component } from 'react';
import * as React from 'react';
import Card from '../../components/Card/card';


//const Componente = props => <h2>{props.msg}</h2>;

function Nosotros() {
    const aboutItems = [
        { title: "Simón Marín Giraldo", description: "Scrum Master" },
        { title: "Manuela Moreno Cordoba", description: "Analista" },
        { title: "Liz Oriana Rodrigues Cruz", description: "Arquitecta" },
        { title: "Julián Ramírez Giraldo", description: "Desarrollador" },
        { title: "Santiago Alzate Cardona", description: "Tester" },
    ];
    const cards = aboutItems.map(item => <Card element={item} />);
    return (
        <div className="container">
            {cards}
        </div>
    );
}

export default Nosotros;