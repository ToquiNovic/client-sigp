import { useState } from "react";
import {
  TextField,
  Button,
  Link,
  Box,
  InputAdornment,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import BlindTwoToneIcon from "@mui/icons-material/BlindTwoTone";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyTwoToneIcon from "@mui/icons-material/KeyTwoTone";
import { login } from "../../services/login";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/userSlice";
import styles from "./LoginForm.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ nickname: username, password })
      .then((data) => {
        dispatch(addUser(data));
        Swal.fire("", "Bienvenido", "success");
        navigate("/");
      })
      .catch((data) => {
        Swal.fire("Upps!", data.response.data.msg, "error");
      });
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlefind = () => {
    
  };

  return (
    <div>
      <Box
        className={styles.container}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
      >
        <form onSubmit={handleSubmit} className={styles.content}>
          <BlindTwoToneIcon sx={{ fontSize: 100 }} />
          <TextField
            required
            label="Usuario"
            // placeholder="Usuario"
            value={username}
            onChange={handleUsernameChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            required
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <KeyTwoToneIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button variant="contained" type="submit">
            Iniciar sesión
          </Button>
          
          <Link href="#" underline="none" onClick={handleClickOpen}>
            ¿Olvidó su nombre de usuario?
          </Link>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Olvide mi Usuario</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Digite su Numero de Documento.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                placeholder="Numero de Documento"
                type="number"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cerrar</Button>
              <Button onClick={handlefind}>Buscar</Button>
            </DialogActions>
          </Dialog>

          <Link href="#" underline="none">
            ¿Olvidó su contraseña?
          </Link>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
