import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de inicio de sesión aquí
  };

  return (
    <form onSubmit={handleSubmit}>
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