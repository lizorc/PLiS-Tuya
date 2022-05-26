import React from 'react';
import styles from './profile.module.css';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useHistory} from "react-router-dom";
import Cards  from '../UserCards/cards'
import UserForm from '../UserForm/userForm';
import axios from 'axios';
import Simulaciones from '../../pages/Simulaciones/simulaciones';

const Profile = () => {

    const {user, isAuthenticated} = useAuth0();
    const email = user.email;
    console.log(user.email)
    let url = "http://localhost:4000/card/"+email;
    let cardsArray = [];
    const [cards, setCards] = useState([]);

    useEffect(()=>{
      const fetchCards = async()=>{
        const {data} = await axios.get(url);
        setCards(data)
      }
      fetchCards();
    },[])
    
    axios.get(url).then(response=>{
      cardsArray = response.data;
    })

    

  return (
    isAuthenticated && (
        <div className={styles.container}>

            <div className = {styles.user}>
              <div className = {styles.userInfo}>
                <h2 class={styles.tituloPerfil}>Información de usuario</h2>
                <div className={styles.imgPerfil} alt={user.name}>
                  <img className={styles.imgPerfil} src={user.picture} alt={user.name}/>
                  <p><strong>Nombre: </strong>{user.name}</p>
                  <p><strong>Correo: </strong>{user.email}</p>
                </div>
              </div>

            </div>
            
            

            <div className = {styles.cardA}>
              <div className = {styles.cardInfo}>
                <div className={styles.margininfo}>
                  <h2>Información de las tarjetas</h2>

                  <div className={styles.buttonContainer}>
                  <Link to = "/crearTarjeta"><button className={styles.addButton}>Añadir tarjeta</button></Link>
                  </div>

                  {cards.map((card)=>(
                      <Cards
                      nombre = {card.nombre}
                      nroTarjeta = {card.nroTarjeta}
                      cuotaManejo = {card.cuotaManejo}
                      interes = {card.tasaInteres}
                      />
                  ))} 
                </div>

                <div className={styles.margininfo}>
                  <h2>Simulaciones Guardadas</h2>

                  <div className={styles.buttonContainer}>
                  <Link to = "/Simulaciones"><button className={styles.addButton}>Ver simulaciones</button></Link>
                  </div>
                </div>

              </div>
            </div>
        </div>

    )
  )
};

export default Profile