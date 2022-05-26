import React from 'react';
import styles from './resultados.module.css'
import { useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Link } from "react-router-dom";
//import {useState} from 'react'
//import { render } from '@testing-library/react';
function Resultados(){

    


    // Configuración resultados
    const datos = JSON.parse(localStorage.getItem("datos"));
    console.log(datos);
    
    let { nombre, value, fee, numQuotas, interestRate } = datos

    let interestPayment=0,capPayment=0,quota=0;

    const cuota = value * (Math.pow(1+interestRate/100,numQuotas)*interestRate/100)/(Math.pow(1+interestRate/100,numQuotas)-1);
    interestPayment = parseFloat(value*(interestRate/100));
    capPayment = cuota-interestPayment;
    value = parseFloat(value-capPayment);
    
    // Configuracion guardar simulación



    const {user, isAuthenticated} = useAuth0();
    let ownerEmail = "";
    let valorCuota = "";
    let tiempo = "";

    const onSubmit = async(e)=>{
        let ownerEmail = user.email;
        let valorCuota = cuota.toFixed(2);
        let tiempo = numQuotas;

        e.preventDefault();
        const Simulacion = {
            ownerEmail,
            valorCuota,
            tiempo,
            nombre
        };
        await axios.post("http://localhost:4000/createSimulation", Simulacion)
        return window.location.href = "http://localhost:3000/simulador";
    }


    const months = [...Array(parseInt(numQuotas)).keys()].map((item,key)=>{
        

        return (
            <div key={key} className={styles.BoxWhite}>
                <h4 className={styles.month}>Mes {item+1}</h4>
                <p> Valor de la cuota</p>
                <span>
                    <b>${cuota.toFixed(2)}</b> COP
                </span>
                <p>Saldo</p>
                <span>
                    {value.toFixed(2)}
                </span>
            </div>
        )
    })

    console.log(months)

    
    return (
        <div className={styles.formBody}>
            <p className={styles.tituloResultado}>Resultado de la simulación: {nombre}</p>

            <div className = {styles.margen}>
                
                <div className={styles.BoxWhite}>
                    <h4 className={styles.month}>¿Qué pagarás?</h4>
                    <p className={styles.titleRes}> Pagarás cuotas de: </p>
                    <span>
                        <p className={styles.resRes}>${cuota.toFixed(2)} COP</p> 
                    </span>
                    <p className={styles.titleRes}>Durante: </p>
                    <span>
                        <p className={styles.resRes}>{numQuotas} meses</p>
                    </span>
                </div>
            </div>

            <div className={styles.resultField}>
            <Link to="simulador"><input className={styles.submitButton} type="submit" value="Volver"/></Link>
            </div>
            
            {isAuthenticated ?
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className={styles.resultField}>
                    <input className={styles.submitButton2} type="submit" value="Guardar simulación"/>
                    </div>
                </form>
            : <></>}
            
        </div>
        
    );
}

export default Resultados;