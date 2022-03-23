import React from 'react';
import styles from './inicio.module.css'
import { Link } from "react-router-dom";

function Inicio() {
    return (
  
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.column_small_left_side}></div><div/>
                    <div className={styles.column_middle}>
                        <div className={styles.title_1}> Manten tus finanzas y tus compras bajo control</div> 
                        <div className={styles.instrBody}>
                            <div className={styles.text1}>Mejora tu experiencia comprando con tus tarjetas de crédito y entérate siempre de lo que pagarás realmente por tus productos.</div>
                        </div>
                        <div className={styles.column_button}>
                        <div class={styles.simulatorField}>
                                 <Link to="/simulador"><input class={styles.submitButton1} type="submit" value="Usar el simulador"/></Link>
                                 <Link to="/simulador"><input class={styles.submitButton2} type="submit" value="Crear cuenta"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column_middle}>
                        <div className={styles.img1}>
                            <img src={require("../../assets/img/Imagen_Tarjetas.png")} alt=""/>
                        </div>
                    </div>
                    <div className={styles.column_small_right_side}></div><div/>
                </div>
                {/* ------------------------------------------------------------------------------- */}
                <div className={styles.row}>
                    <div className={styles.column_small_left_side}></div><div/>
                    <div className={styles.column_middle}>
                          <div className={styles.instrBody}>
                              <div className={styles.img1}>
                                <img src={require("../../assets/img/imagen_resultados.png")} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.column_middle}>
                        <div className={styles.title_2}> Visualiza de forma sencilla la financiación de tus productos.</div> 
                        <div className={styles.instrBody}>
                            <div className={styles.text1}>Usamos una forma de visualizar la información que permite un mejor entendimiento y claridad a la hora de obtener los resultados.</div>
                        </div>
                    </div>
                   
                    <div className={styles.column_small_right_side}></div><div/>
                </div>
                 {/** ----------------------------------------------------------------------------*/}

                <div className={styles.footer}>
                <div className={styles.row}>
                <div className={styles.column_small_left_side}></div><div/>
                    <div className={styles.column_third}>
                        <div className={styles.title_3}> Realiza tu simulación</div> 
                        <div className={styles.instrBody}>
                            <div className={styles.text2}>Genera tus resultados de forma sencilla rellenando un simple formulario.</div>
                        </div>
                    </div>
                    <div className={styles.column_third}>
                    <div className={styles.title_3}> Guarda tus resultados</div> 
                        <div className={styles.instrBody}>
                            <div className={styles.text2}>Al crear una cuenta podrás guardar estos resultados y accederlos en cualquier momento.</div>
                        </div>
                        <div className={styles.text3}>*Funcionalidad en desarrollo.</div>
                    </div>
                    <div className={styles.column_third}>
                    <div className={styles.title_3}> Accede a ellos desde tu teléfono</div> 
                        <div className={styles.instrBody}>
                            <div className={styles.text2}>Podrás acceder a los resultados desde tu teléfono para tenerlos siempre a la mano.</div>
                        </div>
                        <div className={styles.text3}>*Funcionalidad en desarrollo.</div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Inicio;