import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from '../commons/layout/Header'
import styles from '../styles/Home.module.css'
import Footer from '../commons/layout/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />

      <Box className={styles.buttonsContainer}>
        <Button fullWidth variant='outlined'><Link to={"/odontologos"}>Listado de Odontologos</Link></Button>
        <Button fullWidth variant="contained">Registro de nuevo Odontologo</Button>

        <Button fullWidth variant='outlined'><Link to={"/pacientes"}>Listado de Pacientes</Link></Button>
        <Button fullWidth variant="contained">Registro de nuevo Paciente</Button>

        <Button fullWidth variant='outlined'><Link to={"/turnos"}>Listado de Turnos</Link></Button>
        <Button fullWidth variant="contained">Registro de nuevo Turno</Button>
      </Box>

      <Footer />
    </div>
  )
}

export default Home