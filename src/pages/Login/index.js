import { Box, Container } from "@mui/material";
import LoginForm from "../../components/LoginForm";
import NavBar from "../../components/NavBar";
import Fondo from "../../img/Flor.jpg";

const styles = {
  container: {
    backgroundImage: `url(${Fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    with: '100%'
  },
};

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Container style={styles.container} >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <LoginForm />
      </Box>
      </Container>
    </>
  );
};

export default LoginPage;
