import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function DetailPhysicalResource() {
  return (
    <div>
      <Typography align="center" variant="h4" gutterBottom>
        Universidad
      </Typography>
      <Grid container>
        <Grid item xs={5}>
          <Typography>
            Este es un párrafo de ejemplo a la izquierda de la línea vertical.
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5}>
          <img
            src="https://via.placeholder.com/150"
            alt="Ejemplo de imagen a la derecha de la línea vertical"
          />
        </Grid>
      </Grid>
    </div>
  );
}
