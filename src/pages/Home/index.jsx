import { Box } from "@mui/material";
import styles from "./Home.module.css";
import BoxHome from "../../components/BoxHome";


const HomePage = () => {

  return (
    <div className={styles.container}>
      <Box component="div">
        <BoxHome/>
      </Box>
    </div>
  );
};
export default HomePage;