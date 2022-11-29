import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Odontologo from './components/pages/Odontologo';
import Paciente from './components/pages/Paciente';
import Turno from './components/pages/Turno';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/odontologos' element={<Odontologo />} />
        <Route path='/pacientes' element={<Paciente />} />
        <Route path='/turnos' element={<Turno />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
