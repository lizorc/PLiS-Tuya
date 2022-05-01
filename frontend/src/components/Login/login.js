import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useNavigation} from 'react-router';
import styles from './login.module.css'
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';

function Login(){

    const {loginWithRedirect} = useAuth0();

    return(
    
        <div className="app">
            <h1>Login</h1>
            <button onClick={()=>loginWithRedirect()}>Login</button>
        </div>
        
    );
}

export default Login;