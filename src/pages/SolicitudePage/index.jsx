import { Box } from "@mui/material";
import styles from "./Solicitud.module.css";
import CardSolicitud from "../../components/CardSolicitude";
const SolicutudPage = () => {
    return (
        <div className={styles.container}>
            <Box>
                <CardSolicitud/>
            </Box>
        </div>
    );
};
export default SolicutudPage;