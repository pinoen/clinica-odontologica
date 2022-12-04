import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TurnoCard from '../commons/turno/TurnoCard'
import styles from '../styles/Card.module.css'
import CreateTurno from '../commons/turno/CreateTurno'

const Turno = () => {

  const [turnos, setTurnos] = useState([])
  const [openCreate, setOpenCreate] = useState(false)

  useEffect(() => {
    console.log("desde dentro")
    axios.get("http://localhost:5000/turnos")
      .then(res => setTurnos(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handleOpenCreate} size='large'>Agregar Turno</Button>
        <Button size='large'><Link to={"/home"}>Menu Principal</Link></Button>
      </div>

      <CreateTurno openCreate={openCreate} handleCloseCreate={handleCloseCreate} />

      <div className={styles.cardContainer}>
        {turnos.map(turno =>
          <TurnoCard key={turno.id} turno={turno} />
        )}
      </div>
    </>
  )
}

export default Turno