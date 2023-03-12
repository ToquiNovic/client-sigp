import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { login } from "../../services/login";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/userSlice";
import styles from "./LoginForm.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <TextField
        label="Usuario"
        value={username}
        onChange={handleUsernameChange}
      />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button variant="contained" type="submit">
        Iniciar sesión
      </Button>
    </form>
  );
};

export default LoginForm;
