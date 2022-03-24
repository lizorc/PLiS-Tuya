//import React, { Component } from 'react';
import * as React from 'react';
import Card from '../../components/Cards/card';
import styles from './nosotros.module.css';


//const Componente = props => <h2>{props.msg}</h2>;

function Nosotros() {
    const aboutItems = [
        { title: "Simón Marín Giraldo", description: "Scrum Master", github:"https://github.com/smaring1" },
        { title: "Manuela Moreno Cordoba", description: "Analista", github:"https://github.com/mamorenoc19" },
        { title: "Liz Oriana Rodrigues Cruz", description: "Arquitecta", github:"https://github.com/lizorc" },
        { title: "Julián Ramírez Giraldo", description: "Desarrollador", github:"https://github.com/julianramirez2" },
        { title: "Santiago Alzate Cardona", description: "Tester", github:"https://github.com/Snatiolam" },
    ];
    const cards = aboutItems.map(item => <Card element={item} />);
    return (
        <div className={styles.cardList}>
            {cards}
        </div>
    );
}

export default Nosotros;