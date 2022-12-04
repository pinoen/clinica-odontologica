import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from '../styles/Login.module.css'
import data from '../../api/db.json'
import Swal from 'sweetalert2'
import { AuthContext } from '../commons/layout/ClinicaContext'

const Login = () => {

  const { handleLog } = useContext(AuthContext)

  const [usuario, setUsuario] = useState({
    usuario: '',
    contrasena: ''
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

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  function handleSubmit(e) {
    e.preventDefault()
    for (let i = 0; i < data.usuarios.length; i++) {
      if (data.usuarios[i].usuario === usuario.usuario && data.usuarios[i].contrasena === usuario.contrasena) {
        Toast.fire({
          icon: 'success',
          title: 'Logueo exitoso!'
        })
        handleLog()
        setTimeout(() => {
          navigate("/home")

        }, 2000)
        return;

      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Usuario no registrado!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    }
  }

  return (
    <div>
      <form className={styles.loginContainer} >
        <Link to={"/register"}>Si no tienes cuenta, has click aqui</Link>
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

        <Box sx={{ display: 'flex', gap: "40px" }}>
          <Button size='large' onClick={handleSubmit} type='submit' variant="contained" color='primary'>ENVIAR</Button>
        </Box>

      </form>
    </div>
  )
}

export default Login