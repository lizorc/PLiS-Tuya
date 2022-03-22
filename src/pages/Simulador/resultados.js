import React from 'react';
import styles from './simulador.module.css'
import { Link } from "react-router-dom";
import {useState} from 'react'
function Resultados(){

    const datos = JSON.parse(localStorage.getItem("datos"));
    console.log(datos);

    return (
        <div>
            {datos.value}
            {datos.fee}
            {datos.numQuotas}
            {datos.interestRate}
        </div>
    );
}

export default Resultados;