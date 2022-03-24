import React from 'react';
import NavBar from './components/NavBar/navbar'
import Simulador from './pages/Simulador/simulador'
import Instructivo from './pages/Instructivo/instructivo';
import Resultados from './pages/Simulador/resultados'
import Inicio from './pages/Inicio/inicio'
import Nosotros from './pages/Nosotros/nosotros'
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

            <Route exact path="/simulador">
                <Simulador />
            </Route>

            <Route exact path="/resultados">
                <Resultados />
            </Route>

            <Route exact path="/instructivo">
                <Instructivo />
            </Route>

            <Route exact path="/resultados">
                <Resultados />
            </Route>

            <Route exact path="/nosotros">
                <Nosotros />
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