import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function TurnoCard({ turno }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Turno ID: {turno.id}
        </Typography>
        <Typography variant="h5" component="div">
          {turno.paciente.apellido} {turno.paciente.nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Paciente
        </Typography>

        <Typography variant="h5" component="div">
          {turno.odontologo.apellido} {turno.odontologo.nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Odontologo
        </Typography>
        <Typography variant="body2">
          Fecha del turno: {turno.fecha}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Cancelar turno</Button>
      </CardActions>
    </Card>
  );
}