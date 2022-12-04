import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './ClinicaContext'


const ProtectedRoutes = () => {

  const { isLogged } = useContext(AuthContext)

  if (!isLogged) {
    return <Navigate to={"/"} />
  }

  return (
    <Outlet />
  )
}

export default ProtectedRoutes