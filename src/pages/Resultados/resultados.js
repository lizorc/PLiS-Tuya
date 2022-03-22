import React from 'react';
import styles from './resultados.module.css'
import { Link } from "react-router-dom";
function Resultados (){
    return (
        <div className={styles.formBody}>
            <p className={styles.tituloResultado}>Resultado de la simulación</p>

            <div className={styles.resultField}>

                <Link to="/simulador"><input className={styles.submitButton} type="submit" value="Volver"/></Link>

            </div>

        </div>
    )
}

export default Resultados;