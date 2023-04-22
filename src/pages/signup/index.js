import { Box } from "@mui/material";
import Navbar from "../../components/NavBar";
import SingUpForm from "../../components/SingUpForm";

const SingUp = () => {
  return (
    <div>
      <Navbar />
      <Box component="div">
        <SingUpForm/>
      </Box>
    </div>
  );
};

export default SingUp;
