import React from 'react';
import styles from './simuladorAuth.module.css'
import { Link, useHistory} from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

function SimuladorAuth(){

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

    const [value, setValue] = useState("");
    const [numQuotas, setNumQuotas] = useState("");
    const [nombre, setNombre] = useState("");
    const [tarjeta, setTarjeta] = useState("");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {value,numQuotas,nombre,tarjeta};
        localStorage.setItem("datos",JSON.stringify(blog));
        history.push('/resultadosAuth');
    }
    

    return (
        <div className={styles.formBody}>
        <p className={styles.tituloSimulador}>Simulador de cuotas</p>

        <form className={styles.simulatorForm} onSubmit={handleSubmit}>

            <div className={styles.simulatorField}>

                <label htmlFor="fname">Nombre de simulación</label>
                <select type="text" required id="fname" name="tarjeta" placeholder="Ingrese el nombre de simulación"
                value={tarjeta} onChange={(e)=>setTarjeta(e.target.value)}>
                    <option value="">Seleccione una opción</option>
                    {cards.map((card)=>(
                        <option value={JSON.stringify(card)}>{card.nombre}</option>
                    ))}
                </select>

            </div>

            <div className={styles.simulatorField}>

                <label htmlFor="fname">Nombre de simulación</label>
                <input type="text" required id="fname" name="nombre" placeholder="Ingrese el nombre de simulación"
                value={nombre} onChange={(e)=>setNombre(e.target.value)}/>

            </div>


            <div className={styles.simulatorField}>

                <label htmlFor="fname">Valor de la compra</label>
                <input type="text" required id="fname" name="value" placeholder="Ingrese el valor de su compra"
                value={value} onChange={(e)=>setValue(e.target.value)}/>

            </div>

            <div className={styles.simulatorField}>

                <label htmlFor="fname">Nro. de cuotas</label>
                <input type="text" required id="fname" name="numQuotas" placeholder="Ingrese el número de cuotas"
                value={numQuotas} onChange={(e)=>setNumQuotas(e.target.value)}/>

            </div>

            <div className={styles.simulatorField}>
                <Link to="/resultadosAuth"><input className={styles.submitButton} onClick={handleSubmit} type="submit" value="Realizar simulación"/></Link>
                <Link to="/instructivo"><input className={styles.instButton} type="submit" value="Instructivo"/></Link>
            </div>

          </form>

        </div>
    );
}

export default SimuladorAuth;