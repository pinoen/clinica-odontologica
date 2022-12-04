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

export default function CreateTurno({ openCreate, handleCloseCreate }) {

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      paciente: '',
      odontologo: '',
      fecha: '',
    },
    onSubmit: (data) => axios.post("http://localhost:5000/turnos", {
      paciente: data.paciente,
      odontologo: data.odontologo,
      fecha: data.fecha,
    }).then(res => {
      handleCloseCreate()
    })
      .catch(err => console.log(err))
  })


  return (
    <div>
      <Modal
        open={openCreate}
        onClose={handleCloseCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <Typography variant='h5' color='primary' >Agregar Turno</Typography>

            <TextField id="outlined-basic" label="Paciente" variant="outlined" name='paciente' onChange={handleChange} fullWidth />
            <TextField id="outlined-basic" label="Odontologo" variant="outlined" name='odontologo' onChange={handleChange} fullWidth />
            <TextField id="outlined-basic" label="Fecha" variant="outlined" name='fecha' onChange={handleChange} fullWidth />

            <Button type='submit' variant='contained' color='primary'>Agregar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}