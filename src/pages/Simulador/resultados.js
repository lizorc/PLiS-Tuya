import React from 'react';
import styles from './resultados.module.css'
import { Link } from "react-router-dom";
//import {useState} from 'react'
//import { render } from '@testing-library/react';
function Resultados(){

    const datos = JSON.parse(localStorage.getItem("datos"));
    console.log(datos);

    
    return (
        <div className={styles.formBody}>
            <p className={styles.tituloResultado}>Resultado de la simulación</p>

            <div className = {styles.margen}>
                <div className = {styles.BoxWhite}>
                    <h4>Titulo</h4>
                    <p> Valor de la cuota</p>
                    <span>
                        {datos.value}
                    </span>
                    <p>Saldo</p>
                    <span>
                        {datos.fee}
                    </span>
                </div>
            </div>

            {datos.value}
            {datos.fee}
            {datos.numQuotas}
            {datos.interestRate}

            <div className={styles.resultField}>
            <Link to="simulador"><input className={styles.submitButton} type="submit" value="Volver"/></Link>
            </div>
        </div>
        
    );
}

export default Resultados;