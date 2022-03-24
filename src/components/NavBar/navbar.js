import React from 'react';
<<<<<<< Updated upstream
import styles from './navbar.module.css'
=======
import './navbar.css'
>>>>>>> Stashed changes
import { Link } from "react-router-dom";
  
function NavBar(){
    return (
        <header>
            <div className={styles.menu}>
                <img className={styles.imgNavbar} src={require('./PLIS.png')} alt=""/>

                <nav className={styles.navbar}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/simulador">Simulador de cuotas</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}

export default NavBar;