import React from 'react';
import styles from './instructivo.module.css'
import { Link } from "react-router-dom";

function Instructivo() {
    return (
  
            <div className={styles.container}>

                <div className={styles.title}>
                ¿Como usar el simulador?
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.text1}>
                        <p className={styles.step1}>Primer paso:</p>
                        Dirígete al botón "Ir al simulador" en la barra de navegación o desde uno de los accesos directos y dale click.
                    </div>

                    <div className={styles.img1}>
                        <img src={require("../../assets/img/click.png")} alt=""/>
                    </div>
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.img2}>
                        <img src={require("../../assets/img/formulario.png")} alt=""/>
                    </div>

                    <div className={styles.text2}>
                        <p className={styles.step1}>Segundo paso:</p>
                        Rellena los datos del formulario en su totalidad: valor de la compra, Nro. de cuotas, tasa de interés.
                    </div>
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.text1}>
                        <p className={styles.step1}>Tercer paso:</p>
                        Dirígete al botón "Realizar simulación" y clickea sobre él para ver los resultados.
                    </div>

                    <div className={styles.img1}>
                        <img src={require("../../assets/img/simularclick.png")} alt=""/>
                    </div>
                </div>

                <div class={styles.simulatorField}>

                    <Link to="/simulador"><input class={styles.submitButton} type="submit" value="Ir al simulador"/></Link>

                </div>

            </div>

            
        
    );
}

export default Instructivo;