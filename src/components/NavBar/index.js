import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/features/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SIGP
        </Typography>

        {!user && (
          <Button LinkComponent={Link} to="/" color="inherit">
            Iniciar Sesion
          </Button>
        )}
        {user && (
          <Button onClick={() => dispatch(removeUser())} color="inherit">
            Salir
          </Button>
        )}

        {user && user.ROLL_NOMBREROL !== "ESTUDIANTE" && <Button color="inherit">Crear Inventario</Button>}
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Registrarse</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
