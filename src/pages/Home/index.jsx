import { Box } from "@mui/material";
import NavBar from "../../components/NavBar";
import styles from "./Home.module.css";
import BoxHome from "../../components/BoxHome";


const HomePage = () => {

  return (
    <div className={styles.container}>
      <NavBar />
      <Box component="div">
        <BoxHome/>
      </Box>
    </div>
  );
};
export default HomePage;
