import { Box } from "@mui/material";
import LoginForm from "../../components/LoginForm";
import NavBar from "../../components/NavBar";
import backgroundImage from "../../img/Flor.jpg";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <NavBar />
      <Box component="div">
        <LoginForm />
      </Box>
    </div>
  );
};


export default Login;
