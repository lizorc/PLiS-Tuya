import React from 'react';
import styles from './navbar.module.css'
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';

function NavBar(){
    const {loginWithRedirect, isAuthenticated, logout, user} = useAuth0();

    return (
        <header>
            <div className={styles.menu}>
                <img className={styles.imgNavbar} src={require('./PLIS.png')} alt=""/>

                <nav className={styles.navbar}>
                    <ul>
                        {isAuthenticated ? <li>Hola <b className = {styles.name}>{user.name}</b></li> : <></>}
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/simulador">Simulador de cuotas</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        {isAuthenticated ? (<li><Link to="/perfil">Mi perfil</Link></li> ): <></> }
                        {isAuthenticated ? (<li><Link onClick={()=>logout()}>Cerrar sesión</Link></li> ): <li><Link onClick={()=>loginWithRedirect()}>Iniciar sesión</Link></li> }
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}

export default NavBar;