import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Odontologo from './components/pages/Odontologo';
import Paciente from './components/pages/Paciente';
import Turno from './components/pages/Turno';
import Login from './components/pages/Login';
import ProtectedRoutes from './components/commons/layout/ProtectedRoutes';
import Register from './components/pages/Register'
import ClinicaContext from './components/commons/layout/ClinicaContext'


function App() {

  return (
    <BrowserRouter>
      <ClinicaContext>
        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/home' element={<Home />} />
            <Route path='/odontologos' element={<Odontologo />} />
            <Route path='/pacientes' element={<Paciente />} />
            <Route path='/turnos' element={<Turno />} />
          </Route>

          <Route path='*' element={<Login />} />

        </Routes>
      </ClinicaContext>

    </BrowserRouter>
  );
}

export default App;
