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
    
    for(let i = 1; i<=numQuotas;i++){
        const quota = value * (Math.pow(1+interestRate/100,numQuotas)*interestRate/100)/(Math.pow(1+interestRate/100,numQuotas)-1);
        const interestPayment = parseFloat(value*(interestRate/100));
        const capPayment = quota - interestPayment;
        const amount = parseFloat(amount-capPayment);
    }
   


    console.log(calc);

    return (
        <div>
            La cuota mensual es: {calc}
        </div>
    );
}

export default Resultados;