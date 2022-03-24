import React from 'react';
import styles from './inicio2.module.css'
import { Link } from "react-router-dom";

function Inicio() {

    return (
  
            <div className={styles.container}>

                <div className={styles.title}></div>

                <div className={styles.instrBody}>
                    <div className={styles.text1}>
                        <p className={styles.step1}>Mantén tus finanzas y compras bajo control</p>
                        <p className={styles.body1}>Mejora tu experiencia comprando con tus tarjetas de crédito y entérate siempre de lo que pagarás realmente por tus productos.</p>
                        
                        <div class={styles.simulatorField}>
                        <Link to="/simulador"><input className={styles.submitButton} type="submit" value="Realizar simulación"/></Link>
                        <Link to="/instructivo"><input className={styles.instButton} type="submit" value="Instructivo"/></Link>
                        </div>
                    </div>

                    <div className={styles.img1}>
                        <img src={require("../../assets/img/imagentarjetas.png")} alt=""/>
                    </div>
                </div>

                <div className={styles.instrBody}>
                    <div className={styles.img2}>
                        <img src={require("../../assets/img/imagenresultados.png")} alt=""/>
                    </div>

                    <div className={styles.text2}>
                        <p className={styles.step2}>Visualiza de forma sencilla la financiación de tus productos</p>
                        <p className = {styles.body2}>Usamos una forma de visualizar la información que permite un mejor entendimiento y claridad a la hora de tener tus resultados.</p>
                    </div>
                </div>

                <div className={styles.footer}>
                <div className={styles.row}>
                <div className={styles.column_small_left_side}></div><div/>
                    <div className={styles.column_third}>
                    <div className={styles.text4}>*Funcionalidad en desarrollo.</div>
                        <div className={styles.title_3}> Realiza tu simulación</div> 
                        <div className={styles.instrBody}>
                            <div className={styles.text3}>Genera tus resultados de forma sencilla rellenando un simple formulario.</div>
                        </div>
                    </div>
                    <div className={styles.column_third}>
                    <div className={styles.text4}>*Funcionalidad en desarrollo.</div> 
                    <div className={styles.title_3}> Guarda tus resultados</div>
                        <div className={styles.instrBody}>
                            <div className={styles.text3}>Al crear una cuenta podrás guardar estos resultados y accederlos en cualquier momento.</div>
                        </div>
                        
                    </div>
                    <div className={styles.column_third}>
                    <div className={styles.text4}>*Funcionalidad en desarrollo.</div>
                    <div className={styles.title_3}> Accede a ellos desde tu teléfono</div> 
                        <div className={styles.instrBody}>
                            <div className={styles.text3}>Podrás acceder a los resultados desde tu teléfono para tenerlos siempre a la mano.</div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
    );
}

export default Inicio;