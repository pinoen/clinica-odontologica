import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export default function PacienteCard({ paciente, handleDelete }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Paciente ID: {paciente.id}
        </Typography>
        <Typography variant="h5" component="div">
          {paciente.apellido} {paciente.nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Apellido y nombre
        </Typography>

        <Typography variant="body2">
          Domicilio: {paciente.domicilio.calle} {paciente.domicilio.numero} - {paciente.domicilio.localidad}, {paciente.domicilio.provincia}
        </Typography>
        <Typography variant="body2">
          DNI: {paciente.dni}
        </Typography>
        <Typography variant="body2">
          Email: {paciente.email}
        </Typography>
        <Typography variant="body2">
          Fecha de alta: {paciente.alta}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="small">Ver Historial</Button>
        <IconButton aria-label='delete' onClick={() => handleDelete(paciente.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}