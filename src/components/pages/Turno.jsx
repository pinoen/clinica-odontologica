import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TurnoCard from '../commons/turno/TurnoCard'
import styles from '../styles/Card.module.css'

const Turno = () => {

  const [turnos, setTurnos] = useState([])

  useEffect(() => {
    console.log("desde dentro")
    axios.get("http://localhost:5000/turnos")
      .then(res => setTurnos(res.data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className={styles.cardContainer}>
      {turnos.map(turno =>
        <TurnoCard key={turno.id} turno={turno} />
      )}
    </div>
  )
}

export default Turno