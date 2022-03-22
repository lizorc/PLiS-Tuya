import React from 'react';
import styles from './simulador.module.css'
import { Link } from "react-router-dom";
import {useState} from 'react'
function Resultados(){

    const datos = JSON.parse(localStorage.getItem("datos"));
    console.log(datos);

    const value = datos.value;
    const fee = datos.fee;
    const numQuotas = datos.numQuotas;
    const interestRate = datos.interestRate;
    
    const calc = value * (Math.pow(1+interestRate/100,numQuotas)*interestRate/100)/(Math.pow(1+interestRate/100,numQuotas)-1);
    console.log(calc);

    return (
        <div>
            {value}
            {fee}
            {numQuotas}
            {interestRate}
        </div>
    );
}

export default Resultados;