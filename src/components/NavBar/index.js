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
  Badge,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { removeUser } from "../../redux/features/userSlice";
import config from "../../config";
import logo from "../../img/Logo 1.svg";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" sx={{ width: "100%", zIndex: 1201 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo de SIGP" />
        </Typography>

        {!user && (
          <Button LinkComponent={Link} to="/" color="inherit">
            Iniciar Sesion
          </Button>
        )}

        {user && (
          <Button LinkComponent={Link} to="/solicitud" color="inherit">
            <Badge badgeContent={1} color="secondary">
              <Box sx={{ mb: 0, mb2: 0 }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Solicitud
                </Typography>
              </Box>
            </Badge>
          </Button>
        )}

        {user && (
          <Button
            color="inherit"
            onClick={() =>
              navigate(pathname === "/phisical" ? "/elements" : "/phisical")
            }
          >
            {pathname === "/phisical" ? "Elementos" : "Recursos Fisicos"}{" "}
          </Button>
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
