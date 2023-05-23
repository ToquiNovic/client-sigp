import NavBar from "../../components/NavBar";
import BoxReservar from "../../components/BoxReservar";
import styles from "./ReservarPage.module.css";

const ReservarBox = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div>
        <BoxReservar />
      </div>
    </div>
  );
};

export default ReservarBox;
