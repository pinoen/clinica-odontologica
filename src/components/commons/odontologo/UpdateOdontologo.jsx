import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import styles from '../../styles/Form.module.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UpdateOdontologo({ odontologo, openUpdate, handleCloseUpdate, setOpenUpdate }) {

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: odontologo.nombre,
      apellido: odontologo.apellido,
      matricula: odontologo.matricula
    },
    onSubmit: (data) => axios.put(`http://localhost:5000/odontologos/${odontologo.id}`, {
      nombre: data.nombre,
      apellido: data.apellido,
      matricula: data.matricula,
    }).then(res => {
      console.log(res)
      setOpenUpdate(preVal => !preVal)
    })
      .catch(err => console.log(err))
  })

  return (
    <div>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={styles.formContainer} onSubmit={handleSubmit} >
            <Typography variant='h4' color='primary' >Actualizar Odontologo</Typography>

            <TextField id="outlined-basic" label={odontologo.nombre} variant="outlined" name='nombre' onChange={handleChange} fullWidth />
            <TextField id="outlined-basic" label={odontologo.apellido} variant="outlined" name='apellido' onChange={handleChange} fullWidth />
            <TextField id="outlined-basic" label={odontologo.matricula} variant="outlined" name='matricula' onChange={handleChange} fullWidth />

            <Button type='submit' variant='contained' color='primary'>Actualizar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}