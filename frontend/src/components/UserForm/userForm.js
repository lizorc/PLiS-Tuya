import React from 'react'
import styles from './userForm.module.css'
import { Link, useHistory} from "react-router-dom";

const UserForm = (props) => {
  return (
    <form className={styles.simulatorForm}>

    <div className={styles.inputsContainer}>

        <div className={styles.simulatorField}>

            <label htmlFor="fname">Nombre</label>
            <input type="text" required id="fname" name="value" placeholder="Nombre(s)"/>

        </div>

        <div className={styles.simulatorField}>

            <label htmlFor="fname">Apellidos</label>
            <input type="text" required id="fname" name="interestRate" placeholder="Apellidos"/>

        </div>

        <div className={styles.simulatorField}>
            <Link to="/resultados"><input className={styles.submitButton} type="submit" value="Actualizar"/></Link>
        </div>

    </div>

  </form>
  )
}

export default UserForm