import { Box } from "@mui/material";
import LoginForm from "../../components/LoginForm";
import NavBar from "../../components/NavBar";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Box component="div">
        <LoginForm />
      </Box>
    </div>
  );
};

export default Login;
