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

export default function CreatePaciente({ open, handleClose, setNewPaciente }) {

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      domicilio: {
        calle: '',
        numero: '',
        localidad: '',
        provincia: '',
      },
      email: '',
      dni: '',
      alta: ''
    },
    onSubmit: (data) => axios.post("http://localhost:5000/pacientes", {
      nombre: data.nombre,
      apellido: data.apellido,
      domicilio: {
        calle: data.domicilio.calle,
        numero: data.domicilio.numero,
        localidad: data.domicilio.localidad,
        provincia: data.domicilio.provincia,
      },
      email: data.email,
      dni: data.dni,
      alta: data.alta
    }).then(res => {
      handleClose()
      setNewPaciente(preVal => !preVal)
    })
      .catch(err => console.log(err))
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <Typography variant='h5' color='primary' >Agregar Paciente</Typography>

            <TextField size='small' id="outlined-basic" label="Ingresar nombre" variant="outlined" name='nombre' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Ingresar apellido" variant="outlined" name='apellido' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Domicilio - calle" variant="outlined" name='domicilio.calle' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Domicilio - numero" variant="outlined" name='domicilio.numero' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Domicilio - localidad" variant="outlined" name='domicilio.localidad' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Domicilio - provincia" variant="outlined" name='domicilio.provincia' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Ingresar email" variant="outlined" name='email' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Ingresar DNI" variant="outlined" name='dni' onChange={handleChange} fullWidth />
            <TextField size='small' id="outlined-basic" label="Fecha de alta" variant="outlined" name='alta' onChange={handleChange} fullWidth />

            <Button type='submit' variant='contained' color='primary'>Agregar</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}