import React from 'react';
import NavBar from './components/NavBar/navbar'
import Simulador from './pages/Simulador/simulador'
import Instructivo from './pages/Instructivo/instructivo';
import Nosotros from './pages/Nosotros/nosotros';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Routes() {
  return (
    <Router>
      <div>

        <NavBar />

        <Switch>

          <Route exact path="/simulador">
            <Simulador />
          </Route>

          <Route exact path="/instructivo">
            <Instructivo />
          </Route>

          <Route exact path="/nosotros">
            <Nosotros />
          </Route>

          <Route exact path="/">

          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export { Routes }