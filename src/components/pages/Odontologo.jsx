import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OdontologoCard from '../commons/odontologo/OdontologoCard'
import styles from '../styles/Card.module.css'
import { Button } from '@mui/material'
import CreateOdontologo from '../commons/odontologo/CreateOdontologo'
import UpdateOdontologo from '../commons/odontologo/UpdateOdontologo'


const Odontologo = () => {

  const [odontologos, setOdontologos] = useState([])
  const [openCreate, setOpenCreate] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)
  const [deleteOne, setDeleteOne] = useState(false)

  useEffect(() => {
    console.log("desde dentro")
    axios.get("http://localhost:5000/odontologos")
      .then(res => setOdontologos(res.data))
      .catch(err => console.log(err))
  }, [openCreate, deleteOne, openUpdate])

  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);
  const handleOpenUpdate = () => setOpenUpdate(true)
  const handleCloseUpdate = () => setOpenUpdate(false)

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/odontologos/${id}`)
      .then(res => setDeleteOne(preVal => !preVal))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Button onClick={handleOpenCreate} >Agregar Odontologo</Button>
      <CreateOdontologo openCreate={openCreate} handleCloseCreate={handleCloseCreate} />


      <div className={styles.cardContainer}>
        {
          odontologos.map(odontologo =>
            <>
              <OdontologoCard key={odontologo.id} odontologo={odontologo} handleDelete={handleDelete} handleOpenUpdate={handleOpenUpdate} />
              <UpdateOdontologo key={odontologo.matricula} odontologo={odontologo} openUpdate={openUpdate} handleCloseUpdate={handleCloseUpdate} setOpenUpdate={setOpenUpdate} />
            </>
          )
        }
      </div>
    </>
  )
}

export default Odontologo