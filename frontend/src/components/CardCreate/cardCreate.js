import React from 'react'
import styles from './cardCreate.module.css'
import { useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Redirect } from 'react-router';

const CardCreate = () => {

    const {user} = useAuth0();
    const [inputs, setInputs] = useState({
        ownerEmail: "",
        nombre: "",
        nroTarjeta: "",
        cuotaManejo: "",
        tasaInteres: "",
        tipoTarjeta: "",
    });

    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);
    const {ownerEmail,nombre,nroTarjeta,cuotaManejo,tasaInteres,tipoTarjeta} = inputs;
    console.log(mensaje);
    const onChange = (e)=>{
        setInputs({...inputs,[e.target.name]: e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        if(nombre!==''  && nroTarjeta!==''  && cuotaManejo!==''  && tasaInteres!==''  && tipoTarjeta !==''){
            const Tarjeta = {
                ownerEmail: user.email,
                nombre,
                nroTarjeta,
                cuotaManejo,
                tasaInteres,
                tipoTarjeta,
            };
            setLoading(true);
            await axios.post("http://localhost:4000/createCard",Tarjeta)
            .then(({data}) => {
                setMensaje(data.mensaje);
                setInputs({
                    ownerEmail: "",
                    nombre: "",
                    nroTarjeta: "",
                    cuotaManejo: "",
                    tasaInteres: "",
                    tipoTarjeta: "",
                });
                setTimeout(()=>{
                    setMensaje('')
                },1500)
            }).catch((error)=>{
                console.error(error)
                setMensaje("Hubo un error")
                setTimeout(()=>{
                    setMensaje('')
                },1500)
            });

            setLoading(false);
        }
    }

  return (
    <form className={styles.simulatorForm} onSubmit={(e)=>onSubmit(e)}>

    <div className={styles.inputsContainer}>

        <div className={styles.simulatorField}>

            <label htmlFor="fname">Nombre de la tarjeta:</label>
            <input onChange = {(e)=>onChange(e)} type="text" required id="nombre" name="nombre" placeholder="Nombre de la tarjeta"/>

        </div>

        <div className={styles.simulatorField}>

            <label htmlFor="fname">Nro. Tarjeta: </label>
            <input onChange = {(e)=>onChange(e)} type="text" required id="nroTarjeta" name="nroTarjeta" placeholder="XXXX XXXX XXXX XXXX"/>

        </div>

        <div className={styles.simulatorField}>

            <label htmlFor="fname">Cuota de manejo: </label>
            <input onChange = {(e)=>onChange(e)} type="text" required id="cuotaManejo" name="cuotaManejo" placeholder="XXXX XXXX XXXX XXXX"/>

        </div>

        <div className={styles.simulatorField}>

            <label htmlFor="fname">Tasa de interés: </label>
            <input onChange = {(e)=>onChange(e)} type="text" required id="tasaInteres" name="tasaInteres" placeholder="XXXX XXXX XXXX XXXX"/>

        </div>

        <div className={styles.simulatorField}>

            <label htmlFor="fname">Tipo tarjeta: </label>
            <input onChange = {(e)=>onChange(e)} type="text" required id="tipoTarjeta" name="tipoTarjeta" placeholder="Debito/Credito"/>

        </div>

        <div className={styles.simulatorField}>
            <input className={styles.submitButton} type="submit" value="Crear tarjeta"/>
        </div>

        {mensaje ? <div className = {styles.tarjetaCreada}> <p>{mensaje}</p> </div> : <></>}
        

    </div>

  </form>
  )
}

export default CardCreate