import React from 'react';
import NavBar from './components/NavBar/navbar'
import Simulador from './pages/Simulador/simulador'
import Instructivo from './pages/Instructivo/instructivo'
import Resultados from './pages/Simulador/resultados'
import Inicio from './pages/Inicio/inicio'
import Nosotros from './pages/Nosotros/nosotros'
import Login from './components/Login/login'
import Profile from './components/Profile/profile'
import Logout from './components/Logout/logout'
import CardCreate from './components/CardCreate/cardCreate'
import VistaPDF from './components/VistaPDF/vistaPDF'
import Simulaciones from './pages/Simulaciones/simulaciones'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function Routes(){
    return (
        <Router>
          <div>
            
            <NavBar/>

            <Switch>

            <Route exact path="/simulaciones">
                <Simulaciones />
            </Route>

            <Route exact path="/simulador">
                <Simulador />
            </Route>

            <Route exact path="/resultados">
                <Resultados />
            </Route>

            <Route exact path="/instructivo">
                <Instructivo />
            </Route>

            <Route exact path="/nosotros">
                <Nosotros />
            </Route>

            <Route exact path="/perfil">
                <Profile />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/logout">
                <Logout />
            </Route>

            <Route exact path="/inicio/:id">
                <Inicio />
            </Route>

            <Route exact path="/crearTarjeta">
                <CardCreate />
            </Route>

            <Route exact path="/VistaPDF">
                <VistaPDF />
            </Route>

            <Route exact path="/">
                <Inicio />
            </Route>


            </Switch>

          </div>
        </Router>
      );
}

export {Routes}