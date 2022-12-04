import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PacienteCard from '../commons/paciente/PacienteCard'
import styles from '../styles/Card.module.css'
import CreatePaciente from '../commons/paciente/CreatePaciente'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Paciente = () => {

  const [pacientes, setPacientes] = useState([])
  const [open, setOpen] = useState(false);
  const [newPaciente, setNewPaciente] = useState(false)
  const [deletePaciente, setDeletePaciente] = useState(false)


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log("desde dentro")
    axios.get("http://localhost:5000/pacientes")
      .then(res => setPacientes(res.data))
      .catch(err => console.log(err))
  }, [newPaciente, deletePaciente])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/pacientes/${id}`)
      .then(res => setDeletePaciente(preVal => !preVal))
      .catch(err => console.log(err))
  }


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size='large' onClick={handleOpen}>Agregar Paciente</Button>
        <Button size='large'><Link to={"/home"}>Menu Principal</Link></Button>
      </div>

      <CreatePaciente open={open} handleClose={handleClose} setNewPaciente={setNewPaciente} />
      <div className={styles.cardContainer}>
        {pacientes.map(paciente =>
          <PacienteCard key={paciente.id} paciente={paciente} handleDelete={handleDelete} />
        )}
      </div>
    </>
  )
}

export default Paciente