import React from 'react'
import styles from './cards.module.css';

const Cards = (props) => {
  return (
    <div className={styles.card}>
                    
        <div class={styles.top_block}>
            <span class={styles.card_name}>
                {props.nombre}
            </span>
        </div>

        <div class={styles.card_number}>
            <p>{props.nroTarjeta}</p>
        </div>

        <div class={styles.bottom_block}>
            <div class={styles.balance}>
                <div>Cuota de manejo e interés</div>
                <div class={styles.card_balance}>
                    $ {props.cuotaManejo} - {props.interes}%
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards