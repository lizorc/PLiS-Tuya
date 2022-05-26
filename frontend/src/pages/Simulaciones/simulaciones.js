import React from 'react';
import styles from './simulaciones.module.css'
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
//import {useState} from 'react'
//import { render } from '@testing-library/react';
function Simulaciones(){

    const {user, isAuthenticated} = useAuth0();
    const datos = JSON.parse(localStorage.getItem("datos"));
    console.log(datos);
    
    let { value, fee, numQuotas, interestRate } = datos

    let interestPayment=0,capPayment=0,quota=0;

    const cuota = value * (Math.pow(1+interestRate/100,numQuotas)*interestRate/100)/(Math.pow(1+interestRate/100,numQuotas)-1);
    interestPayment = parseFloat(value*(interestRate/100));
    capPayment = cuota-interestPayment;
    value = parseFloat(value-capPayment);
    
    return (
        isAuthenticated && (
            <div className={styles.formBody}>
            <p className={styles.tituloResultado}> Simulaciones guardadas </p>

            <div className = {styles.margen}>
                
                <div className={styles.BoxWhite}>
                    <h4 className={styles.month}>Nombre</h4>
                    
                    <div className={styles.titleRes}> Pagarás cuotas de: </div>
                    <div className={styles.titleRes}>Durante: </div>
                    <div className={styles.resRes}>${cuota.toFixed(2)} COP </div> 
                    <div className={styles.resRes}>{numQuotas} meses</div>
                    
                    <div className={styles.resultField}>
                        <Link to="simulador"><input className={styles.deleteButton} type="submit" value="X"/></Link>
                    </div>
                    
                </div>
            </div>

            <div className={styles.resultField}>
            <Link to="simulador"><input className={styles.submitButton} type="submit" value="Volver"/></Link>
            </div>
        </div>
        )
        
    );
}

export default Simulaciones;