import React from 'react';
import styles from './simulador.module.css'
import { Link } from "react-router-dom";
function Simulador(){
    return (
        <div className={styles.formBody}>
        <p className={styles.tituloSimulador}>Simulador de cuotas</p>

        <form className={styles.simulatorForm} action="">

            <div className={styles.simulatorField}>

                <label for="fname">Valor de la compra</label>
                <input type="text" id="fname" name="firstname" placeholder="Ingrese el valor de su compra"/>

            </div>

            <div className={styles.simulatorField}>

                <label for="fname">Tasa de interés</label>
                <input type="text" id="fname" name="firstname" placeholder="Ingrese la tasa de interés"/>

            </div>

            <div className={styles.simulatorField}>

                <label for="fname">Cuota de manejo</label>
                <input type="text" id="fname" name="firstname" placeholder="Ingrese el valor de la cuota de manejo"/>

            </div>

            <div className={styles.simulatorField}>

                <label for="fname">Nro. de cuotas</label>
                <input type="text" id="fname" name="firstname" placeholder="Ingrese el número de cuotas"/>

            </div>
    
          </form>

          
            <div className={styles.simulatorField}>

                <input className={styles.submitButton} type="submit" value="Realizar simulación"/>
                <Link to="/instructivo"><input className={styles.instButton} type="submit" value="Instructivo"/></Link>

            </div>
            
        </div>
    );
}

export default Simulador;