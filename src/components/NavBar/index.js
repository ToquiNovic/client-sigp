import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SIGP
          </Typography>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Iniciar Sesion</Button>
          <Button color="inherit">Registrarse</Button>
        </Toolbar>
      </AppBar>
    );
  };

  export default Navbar;