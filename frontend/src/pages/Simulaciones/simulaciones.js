import React from 'react';
import styles from './simulaciones.module.css'
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {useState, useEffect} from 'react'
//import { render } from '@testing-library/react';
function Simulaciones(){

    const {user, isAuthenticated} = useAuth0();

    const email = user.email;
    console.log(user.email)
    let url = "http://localhost:4000/simulation/"+email;
    let simuArray = [];
    const [simulation, setSimulation] = useState([]);

    useEffect(()=>{
        const fetchSimul = async()=>{
          const {data} = await axios.get(url);
          setSimulation(data)
        }
        fetchSimul();
      },[])
      
      axios.get(url).then(response=>{
        simuArray = response.data;
      })

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

            {simulation.map((simul)=>(

            
            <div className = {styles.margen}>
                
                <div className={styles.BoxWhite}>
                    <h4 className={styles.month}>{simul.nombre}</h4>
                    
                    <div className={styles.titleRes}> Pagarás cuotas de: </div>
                    <div className={styles.titleRes}>Durante: </div>
                    <div className={styles.resRes}>${simul.valorCuota} COP </div> 
                    <div className={styles.resRes}>{simul.tiempo} meses</div>
                    
                    <div className={styles.resultField}>
                        <Link to="simulador"><input className={styles.deleteButton} type="submit" value="X"/></Link>
                    </div>
                    
                </div>
            </div>
            ))}

            <div className={styles.resultField}>
            <Link to="perfil"><input className={styles.submitButton} type="submit" value="Volver"/></Link>
            </div>
        </div>
        )
        
    );
}

export default Simulaciones;