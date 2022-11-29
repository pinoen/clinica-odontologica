import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


export default function OdontologoCard({ odontologo, handleDelete, handleOpenUpdate }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Odontologo ID: {odontologo.id}
        </Typography>
        <Typography variant="h5" component="div">
          {odontologo.apellido} {odontologo.nombre}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Apellido y nombre
        </Typography>
        <Typography variant="body2">
          Matricula: {odontologo.matricula}
        </Typography>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={handleOpenUpdate} size="small">Actualizar Datos</Button>
        <IconButton aria-label='delete' onClick={() => handleDelete(odontologo.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}