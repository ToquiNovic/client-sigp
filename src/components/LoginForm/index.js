import { useState } from "react";
import { TextField, Button, Box, InputAdornment } from "@mui/material";
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
import { useNavigate, Link } from "react-router-dom";
import DialogRecoverPassword from "../DialogRecoverPassword";
import DialogForgetUser from "../DialogForgerUser";
import logo from "../../img/Logo 1.svg";

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
        dispatch(
          addUser({
            ...data,
            avatar:
              "https://assets-global.website-files.com/61dc0796f359b6145bc06ea6/633d83c8cbd0cce86ce8cbe6_TransparentAvatar-WebsiteHero-thumb.png",
          })
        );
        Swal.fire("", "Bienvenido", "success");
        navigate("/phisical");
      })
      .catch((data) => {
        Swal.fire("Upps!", data.response.data.msg, "error");
      });
  };

  const [openRecoverPassword, setOpenRecoverPassword] = useState(false);
  const handleClouseOpenRecoverPassword = () => {
    setOpenRecoverPassword(false);
  };

  const [openForgetUser, setOpenForgetUser] = useState(false);
  const handleClouseOpenForgetUser = () => {
    setOpenForgetUser(false);
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
          <img src={logo} alt="logo" />
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

          <Button onClick={() => setOpenForgetUser(true)}>
            ¿Olvidó su nombre de usuario?
          </Button>
          <DialogForgetUser
            open={openForgetUser}
            handleClose={handleClouseOpenForgetUser}
          ></DialogForgetUser>

          <Button onClick={() => setOpenRecoverPassword(true)}>
            ¿Olvidó su contraseña?
          </Button>
          <DialogRecoverPassword
            open={openRecoverPassword}
            handleClose={handleClouseOpenRecoverPassword}
          ></DialogRecoverPassword>

          <Button>
            ¿No tienes cuenta?
            <Link to="/register">Registrate</Link>
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
