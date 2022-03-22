import React from 'react';
import './navbar.css'
import { Link } from "react-router-dom";
  
function NavBar(){
    return (
        <header>
            <div className="menu">
                <img className="img_navbar" src={require('./PLIS.png')} alt=""/>

                <nav className="navbar">
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