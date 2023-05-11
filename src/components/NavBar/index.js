import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Box,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/features/userSlice";
import config from "../../config";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  return (
    <AppBar
      position="fixed"
      sx={{ width: '100%', zIndex: 1201 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SIGP
        </Typography>

        {!user && (
          <Button LinkComponent={Link} to="/" color="inherit">
            Iniciar Sesion
          </Button>
        )}

        {user && user.roles.includes(config.ROLL.ADMIN) && (
          <Button color="inherit">Crear Inventario</Button>
        )}

        {user && user.roles.includes(config.ROLL.ADMIN) && (
          <Button LinkComponent={Link} to="/dashboard" color="inherit">
            Dashboard
          </Button>
        )}

        {!user && (
          <Button LinkComponent={Link} to="/register" color="inherit">
            Registrarse
          </Button>
        )}

        {user && (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                onClick={() => {
                  handleCloseUserMenu();
                  dispatch(removeUser());
                }}
              >
                <Typography textAlign="center">Salir</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
