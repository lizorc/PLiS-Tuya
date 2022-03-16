import React from 'react';
import './NavBar.css'
function NavBar(){
    return (
        <header>
            <div className="menu">
                <img className="img_navbar" src={require('./PLIS.png')} alt=""/>

                <nav className="navbar">
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Simulador de cuotas</a></li>
                        <li><a href="">Nosotros</a></li>
                    </ul>
                </nav>
                
            </div>
        </header>
    );
}

export {NavBar};