import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/Login.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'

const Register = () => {

  const [usuario, setUsuario] = useState({
    usuario: '',
    contrasena: '',
    confirm: ''
  })

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setUsuario(preData => {
      return {
        ...preData,
        [name]: value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (usuario.contrasena === usuario.confirm) {
      axios.post("http://localhost:5000/usuarios", {
        usuario: usuario.usuario,
        contrasena: usuario.contrasena
      })
      Swal.fire({
        title: 'Operacion exitosa!',
        text: 'Usuario registrado correctamente. Ahora proceda a loguarse para ingreso al sistema',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      navigate("/login")
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Los valores ingresados para contrasena no son iguales!',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  }

  return (
    <div>
      <form className={styles.loginContainer} >
        <Typography variant='h6'>Ingrese sus datos</Typography>
        <TextField
          onChange={handleChange}
          name='usuario'
          value={usuario.usuario}
          type={"text"}
          id="usuario"
          label="usuario"
          color="success"
          variant='outlined'
          focused />

        <TextField
          onChange={handleChange}
          name="contrasena"
          value={usuario.contrasena}
          type={"password"}
          id="contrasena"
          label="contrasena"
          color="success"
          variant='outlined'
          focused />

        <TextField
          onChange={handleChange}
          name="confirm"
          value={usuario.confirm}
          type={"password"}
          id="confirm"
          label="confirmar contrasena"
          color="success"
          variant='outlined'
          focused />

        <Box sx={{ display: 'flex', gap: "40px" }}>
          <Button size='large' variant="container" color='secondary'><Link to="/login">CANCELAR</Link></Button>
          <Button size='large' onClick={handleSubmit} type='submit' variant="contained" color='primary'>ENVIAR</Button>
        </Box>

      </form>
    </div>
  )
}

export default Register